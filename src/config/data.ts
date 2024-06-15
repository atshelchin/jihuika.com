import colleges2 from "./colleges.txt?raw";
import Papa from "papaparse";

const results: any = Papa.parse(colleges2);

const columns = [
  { name: "序号", uid: "id", sortable: true },
  { name: "学校名称", uid: "name" },
  { name: "学校标识码", uid: "code" },
  { name: "所在地", uid: "city", sortable: true },

  { name: "主管部门", uid: "organizer", sortable: true },

  { name: "办学层次", uid: "level", sortable: true },
  { name: "备注", uid: "memo" },
];
const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];
const levelOptions = [
  { name: "本科", uid: "本科" },
  { name: "专科", uid: "专科" },
];

// 学校名称
// 学校标识码
// 主管部门
// 所在地
// 办学层次
// 备注

const colleges = results.data.map((college: any) => {
  return {
    id: college[0],
    name: college[1],
    code: college[2],
    organizer: college[3],
    city: college[4],
    level: college[5],
    memo: college[6],
  };
});

export { columns, colleges, statusOptions, levelOptions };
