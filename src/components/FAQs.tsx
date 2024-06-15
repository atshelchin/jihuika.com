import React from "react";
import { Icon } from "@iconify/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const faqs = [
  {
    title: "德国机会卡是什么？",
    content:
      "是一种入境德国的签证。持卡人有资格在德国寻找合适的工作，同时享有在德国生活的权利，初期通常给予一年的居留许可，之后可以申请延期",
  },
  {
    title: "申请德国机会卡需要满足什么条件？",
    content: `<strong>资格</strong>：至少两年的职业培训证明或德国认可的大学学位证明。<br/>
       <strong>经济保障</strong>：足够的资金在德国生活(每人约12323欧元/年)。<br/>
       <strong>语言能力</strong>：德语A1水平或英语达到B2水平。<br/>
       <strong>打分</strong>：评分标准中达到6分。
      `,
  },
  {
    title: "德国机会卡打分的六分究竟怎么得？",
    content: ` <strong>语言能力</strong><br/>

            3分：德语水平达到B2<br/>

            2分：德语水平达到B1<br/>

            1分：德语水平达到A2，或英语达到C1<br/>

            <strong>工作经验</strong><br/>

            4分：持有已在德国认证的外国专业资格证书，或已获准从事受监管的职业（如教育工作者、护士或工程师）<br/>

            3分：在过去7年内，在专业领域有5年的工作经验<br/>

            2分：在过去5年内，有2年的工作经验并接受过职业培训<br/>

            1分：接受过短缺职业的培训<br/>

            <strong>年龄</strong><br/>

            2分：35岁以下<br/>

            1分：35岁至40岁<br/>

            <strong>其他</strong><br/>

            1分：在过去5年内在德国居住了至少6个月<br/>

            1分：配偶或已登记的同居伴侣一起申请机会卡`,
  },
  {
    title: "什么时候提交申请最合适？",
    content: `申请德国机会卡的最佳时间是计划入境德国前至少六个月。这样可以确保有足够的时间处理所有必要的文件和申请程序。标准的处理时间通常为2-3周，`,
  },
  {
    title: "如何申请",
    content: `向德国驻外使领馆提交申请，提供相关学历证明、语言能力证明、资金证明等`,
  },
];

export default function FAQs() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    // <Accordion selectionMode="multiple">
    //   <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
    //     {defaultContent}
    //   </AccordionItem>
    //   <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
    //     {defaultContent}
    //   </AccordionItem>
    //   <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
    //     {defaultContent}
    //   </AccordionItem>
    // </Accordion>

    <Accordion
      fullWidth
      keepContentMounted
      itemClasses={{
        base: "px-0 md:px-2 md:px-6",
        title: "font-medium",
        trigger: "py-6 flex-row-rever2se",
        content: "pt-0 pb-6 text-base text-default-500",
        indicator: "rotate-0 data-[open=true]:-rotate-45",
      }}
      items={faqs}
      selectionMode="multiple"
    >
      {faqs.map((item, i) => (
        <AccordionItem
          key={i}
          indicator={
            <Icon className="text-secondary" icon="lucide:plus" width={24} />
          }
          title={item.title}
        >
          <div dangerouslySetInnerHTML={{ __html: item.content }} />
        </AccordionItem>
      ))}
    </Accordion>
  );
}
