import React from "react";
import { RadioGroup, Radio } from "@nextui-org/react";

export default function Pointchecker() {
  const [selectedLng, setSelectedLng] = React.useState("0");
  const [selectedAge, setSelectedAge] = React.useState("0");
  const [selectedExp, setSelectedExp] = React.useState("0");
  const [selectedOther, setSelectedOther] = React.useState("0");

  return (
    <>
      <div className="flex flex-col gap-3">
        <RadioGroup
          label="语言能力"
          value={selectedLng}
          onValueChange={setSelectedLng}
        >
          <Radio value="3">
            德语水平达到B2 <span className="text-gray-500 mx-2">3分</span>
          </Radio>
          <Radio value="2">
            德语水平达到B1 <span className="text-gray-500 mx-2">2分</span>
          </Radio>
          <Radio value="1">
            德语水平达到A2，或英语达到C1{" "}
            <span className="text-gray-500">1分</span>
          </Radio>
          <Radio value="0">
            不满足上述条件 <span className="text-gray-500">0分</span>
          </Radio>
        </RadioGroup>
      </div>

      <div className="flex flex-col gap-3">
        <RadioGroup
          label="年龄"
          value={selectedAge}
          onValueChange={setSelectedAge}
        >
          <Radio value="2">
            35岁以下<span className="text-gray-500 mx-2">2分</span>
          </Radio>
          <Radio value="1">
            35岁至40岁 <span className="text-gray-500 mx-2">1分</span>
          </Radio>
          <Radio value="0">
            不满足上述条件 <span className="text-gray-500">0分</span>
          </Radio>
        </RadioGroup>
      </div>

      <div className="flex flex-col gap-3">
        <RadioGroup
          label="工作经验"
          value={selectedExp}
          onValueChange={setSelectedExp}
        >
          <Radio value="4">
            持有已在德国认证的外国专业资格证书，或已获准从事受监管的职业（如教育工作者、护士或工程师）
            <span className="text-gray-500 mx-2">4分</span>
          </Radio>
          <Radio value="3">
            在过去7年内，在专业领域有5年的工作经验{" "}
            <span className="text-gray-500 mx-2">3分</span>
          </Radio>
          <Radio value="2">
            在过去5年内，有2年的工作经验并接受过职业培训{" "}
            <span className="text-gray-500 mx-2">2分</span>
          </Radio>
          <Radio value="1">
            接受过短缺职业的培训 <span className="text-gray-500 mx-2">1分</span>
          </Radio>
          <Radio value="0">
            不满足上述条件 <span className="text-gray-500">0分</span>
          </Radio>
        </RadioGroup>
      </div>

      <div className="flex flex-col gap-3">
        <RadioGroup
          label="其他"
          value={selectedOther}
          onValueChange={setSelectedOther}
        >
          <Radio value="1">
            在过去5年内在德国居住了至少6个月
            <span className="text-gray-500 mx-2">1分</span>
          </Radio>
          <Radio value="1">
            配偶或已登记的同居伴侣一起申请机会卡{" "}
            <span className="text-gray-500 mx-2">1分</span>
          </Radio>
          <Radio value="0">
            不满足上述条件 <span className="text-gray-500">0分</span>
          </Radio>
        </RadioGroup>
      </div>

      <div>
        你的得分为：
        {parseInt(selectedLng) +
          parseInt(selectedAge) +
          parseInt(selectedExp) +
          parseInt(selectedOther)}{" "}
        分
      </div>
    </>
  );
}
