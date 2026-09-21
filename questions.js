/* 题目数据 */

window.questions = [
  {
    level: "LEVEL 01 / 询价回复",

    customerName: "Emma Collins",

    customerRole: "UK Retail Buyer · Online",

    task: "选择最专业、最完整的英文回复",

    message: `
      <p>Hi,</p>

      <p>
        We are interested in your reusable bamboo
        cutlery sets.
      </p>

      <p>
        Could you send us your best price for 500 sets,
        including individual packaging?
      </p>

      <p>
        Best regards,<br>
        Emma
      </p>
    `,

    options: [
      {
        type: "wrong",

        text:
          "Dear customer, please send us your exact requirements. " +
          "We will give you our lowest price."
      },

      {
        type: "incomplete",

        text:
          "Hi Emma, thank you for your inquiry. " +
          "We can offer a good price for 500 bamboo cutlery sets. " +
          "Please let us know if you are interested."
      },

      {
        type: "correct",

        text:
          "Hi Emma, thank you for your interest in our bamboo " +
          "cutlery sets. To prepare an accurate quotation for " +
          "500 sets, could you confirm your preferred packaging " +
          "requirements and delivery destination? We will then " +
          "send you the unit price, packaging details and " +
          "estimated lead time."
      }
    ],

    modelAnswer: `
  <p><strong>Subject: Re: Bamboo Cutlery Inquiry</strong></p>

  <p>Hi Emma,</p>

  <p>
    Thank you for your interest in our reusable bamboo
    cutlery sets.
  </p>

  <p>
    To prepare an accurate quotation for 500 sets,
    could you please confirm your preferred individual
    packaging and delivery destination?
  </p>

  <p>
    Once we receive these details, we will send you the
    unit price, packaging specifications, estimated lead
    time and quotation validity.
  </p>

  <p>
    Best regards,<br>
    [Your Name]
  </p>
`,

keyPhrases: [
  "Thank you for your interest in...",
  "To prepare an accurate quotation...",
  "Could you please confirm...?",
  "Once we receive these details..."
],

    feedback: {
      wrong: {
        title: "这个表达需要改进",

        text:
          "Dear customer 比较生硬，lowest price 也容易造成 " +
          "不必要的价格承诺。专业回复应该使用客户姓名，并在报价前确认信息。"
      },

      incomplete: {
        title: "语气不错，但信息不完整",

        text:
          "这个版本语法没有明显错误，但没有确认包装、目的地和交期，" +
          "也没有明确推动沟通进入下一步。"
      },

      correct: {
        title: "回答正确！",

        text:
          "这封回复先确认客户需求，再询问包装和目的地信息，" +
          "并说明正式报价将包含哪些内容。语气自然，信息完整。"
      }
    }
  },

  {
    level: "LEVEL 02 / 价格谈判",

    customerName: "Emma Collins",

    customerRole: "UK Retail Buyer · Online",

    task: "面对客户压价，选择最专业的回复",

    message: `
      <p>Hi,</p>

      <p>
        Thank you for the quotation.
      </p>

      <p>
        Your price is around 15% higher than another
        supplier's offer. Can you offer a better price?
      </p>

      <p>
        Best regards,<br>
        Emma
      </p>
    `,

    options: [
      {
        type: "wrong",

        text:
          "Our price is already very cheap. Other suppliers' " +
          "quality is not as good as ours."
      },

      {
        type: "incomplete",

        text:
          "We can reduce the price. How much discount do you want?"
      },

      {
        type: "correct",

        text:
          "Hi Emma, thank you for your feedback. We understand " +
          "that price is an important consideration. Could you " +
          "share whether the other offer is based on the same " +
          "product specifications and packaging? We will review " +
          "the quotation based on the order quantity and see what " +
          "best workable option we can offer."
      }
    ],
modelAnswer: `
  <p><strong>Subject: Re: Quotation for Bamboo Cutlery Sets</strong></p>

  <p>Hi Emma,</p>

  <p>
    Thank you for your feedback on our quotation.
    We understand that price is an important
    consideration.
  </p>

  <p>
    Could you please confirm whether the other offer
    is based on the same product specifications,
    packaging and order quantity?
  </p>

  <p>
    We would be happy to review the quotation and
    explore whether adjusting the quantity or packaging
    could provide a more workable option.
  </p>

  <p>
    We look forward to hearing your thoughts.
  </p>

  <p>
    Best regards,<br>
    [Your Name]
  </p>
`,

keyPhrases: [
  "Thank you for your feedback on...",
  "We understand that price is an important consideration.",
  "Could you please confirm whether...?",
  "We would be happy to review...",
  "a more workable option"
],

    feedback: {
      wrong: {
        title: "不要直接否定竞争对手",

        text:
          "这种回复带有防御性，而且在没有证据的情况下批评其他供应商。" +
          "这容易降低客户对你的信任。"
      },

      incomplete: {
        title: "让步太快了",

        text:
          "直接同意降价会削弱谈判位置。应该先确认双方比较的是不是相同规格，" +
          "再根据数量、包装和付款条件讨论价格。"
      },

      correct: {
        title: "回答正确！",

        text:
          "这封回复先认可客户对价格的关注，再确认比较条件是否一致，" +
          "最后表示愿意寻找可行方案。既保持礼貌，也避免立刻承诺降价。"
      }
    }
  },
    {
    level: "LEVEL 03 / 订单确认",

    customerName: "Emma Collins",

    customerRole: "UK Retail Buyer · Online",

    task: "确认订单前，选择最稳妥的英文回复",

    message: `
      <p>Hi,</p>

      <p>
        We would like to place an order for 1,000 bamboo
        cutlery sets.
      </p>

      <p>
        Please print our logo on the cotton pouch and arrange
        shipment before 15 November. Could you send us the
        proforma invoice today?
      </p>

      <p>
        Best regards,<br>
        Emma
      </p>
    `,

    options: [
      {
        type: "wrong",

        text:
          "Hi Emma, no problem. We guarantee shipment before " +
          "15 November and will send the invoice immediately."
      },

      {
        type: "incomplete",

        text:
          "Hi Emma, thank you for your order. Please send us " +
          "your logo file, and we will prepare the invoice."
      },

      {
        type: "correct",

        text:
          "Hi Emma, thank you for your order. Before issuing " +
          "the proforma invoice, could you please send us the " +
          "logo artwork and confirm the delivery destination? " +
          "We will also check the production schedule and confirm " +
          "whether shipment before 15 November is feasible. Once " +
          "these details are confirmed, we will send you the " +
          "proforma invoice."
      }
    ],
modelAnswer: `
  <p><strong>Subject: Order Confirmation and Proforma Invoice</strong></p>

  <p>Hi Emma,</p>

  <p>
    Thank you for confirming your order for
    1,000 bamboo cutlery sets.
  </p>

  <p>
    We have noted your request for the company logo
    to be printed on the dark green cotton pouch.
    Please send us the logo artwork in a high-resolution
    AI or PDF format.
  </p>

  <p>
    Could you also confirm the delivery destination
    and consignee details? Once we receive this
    information, we will check the production schedule
    and confirm whether shipment before 15 November
    is feasible.
  </p>

  <p>
    We will issue the proforma invoice after all order
    details have been confirmed.
  </p>

  <p>
    Best regards,<br>
    [Your Name]
  </p>
`,

keyPhrases: [
  "Thank you for confirming your order...",
  "We have noted your request for...",
  "Please send us the artwork in...",
  "Could you also confirm...?",
  "once all order details have been confirmed"
],

    feedback: {
      wrong: {
        title: "不要在核实前作出保证",

        text:
          "客户提出了定制和明确交期，但这个回复没有检查Logo文件、" +
          "生产安排和目的地，就直接保证发货日期，存在履约风险。"
      },

      incomplete: {
        title: "还缺少重要订单信息",

        text:
          "询问Logo文件是正确的，但还需要确认目的地，并检查定制生产是否能够满足交期。"
      },

      correct: {
        title: "回答正确！",

        text:
          "这封回复确认了客户的订单意向，同时在开具形式发票前核对Logo、" +
          "目的地和生产时间，避免在未经核实的情况下承诺交期。"
      }
    }
  },

    {
    level: "LEVEL 04 / 付款条件",

    customerName: "Emma Collins",

    customerRole: "UK Retail Buyer · Online",

    task: "面对客户提出的新付款条件，选择最稳妥的回复",

    message: `
      <p>Hi,</p>

      <p>
        For this order, we would prefer payment 60 days
        after delivery.
      </p>

      <p>
        Please confirm whether you can accept this payment
        term so that we can proceed.
      </p>

      <p>
        Best regards,<br>
        Emma
      </p>
    `,

    options: [
      {
        type: "wrong",

        text:
          "Thank you for your message. We can accept payment " +
          "60 days after delivery and will revise the invoice today."
      },

      {
        type: "incomplete",

        text:
          "Thank you for your proposal. Unfortunately, we cannot " +
          "accept payment after delivery for a first order."
      },

      {
        type: "correct",

        text:
          "Thank you for your proposal. For a first order, our " +
          "standard term is 30% deposit and 70% before shipment. " +
          "We would be happy to review more flexible terms after " +
          "we establish a regular order history."
      }
    ],
modelAnswer: `
  <p><strong>Subject: Re: Payment Terms for Initial Order</strong></p>

  <p>Hi Emma,</p>

  <p>
    Thank you for sharing your preferred payment terms.
  </p>

  <p>
    For an initial order, our standard payment term is
    a 30% deposit, with the remaining 70% payable before
    shipment. As this is our first transaction, we are
    currently unable to offer payment 60 days after
    delivery.
  </p>

  <p>
    Once we have established a regular order history,
    we would be happy to review more flexible payment
    arrangements for future orders.
  </p>

  <p>
    Please let us know whether the standard term would
    be workable for you, and we can update the proforma
    invoice accordingly.
  </p>

  <p>
    Best regards,<br>
    [Your Name]
  </p>
`,

keyPhrases: [
  "Thank you for sharing your preferred...",
  "For an initial order, our standard term is...",
  "we are currently unable to offer...",
  "we would be happy to review...",
  "would be workable for you"
],

    feedback: {
      wrong: {
        title: "不要未经审核接受赊销条件",

        text:
          "60天账期会增加回款风险。首次合作时，不应在没有信用审核和公司批准的情况下直接接受。"
      },

      incomplete: {
        title: "立场明确，但没有提供替代方案",

        text:
          "拒绝本身没有问题，但只说不能接受容易让谈判停止。更好的回复应说明标准条件并提供未来调整的可能性。"
      },

      correct: {
        title: "回答正确！",

        text:
          "这个回复说明了首次订单的标准付款条件，同时保留未来合作后调整账期的空间，兼顾风险控制和客户关系。"
      }
    }
  },

  {
    level: "LEVEL 05 / 订单变更",

    customerName: "Emma Collins",

    customerRole: "UK Retail Buyer · Online",

    task: "客户在生产开始后要求修改包装，选择最佳回复",

    message: `
      <p>Hi,</p>

      <p>
        We would like to change the cotton pouch from natural
        beige to dark green.
      </p>

      <p>
        Please make this change without affecting the agreed
        price or shipping date.
      </p>

      <p>
        Best regards,<br>
        Emma
      </p>
    `,

    options: [
      {
        type: "wrong",

        text:
          "Thank you for the update. We have informed production " +
          "and will make the change without affecting the schedule."
      },

      {
        type: "incomplete",

        text:
          "Thank you for the update. The order is already in " +
          "production, so changing the pouch may not be possible."
      },

      {
        type: "correct",

        text:
          "Thank you for the update. We will check the current " +
          "production status and confirm whether the colour change " +
          "would affect the cost or shipping date before proceeding."
      }
    ],
modelAnswer: `
  <p><strong>Subject: Re: Change to Cotton Pouch Colour</strong></p>

  <p>Hi Emma,</p>

  <p>
    Thank you for letting us know about the requested
    colour change.
  </p>

  <p>
    As production has already started, we need to check
    the current material and production status before
    confirming the change.
  </p>

  <p>
    We will review whether changing the pouch from
    natural beige to dark green would affect the unit
    price or the agreed shipping date.
  </p>

  <p>
    We will update you with the available options by
    tomorrow afternoon. We will not make any changes
    until we receive your confirmation.
  </p>

  <p>
    Best regards,<br>
    [Your Name]
  </p>
`,

keyPhrases: [
  "Thank you for letting us know...",
  "we need to check... before confirming",
  "whether the change would affect...",
  "We will update you by...",
  "until we receive your confirmation"
],

    feedback: {
      wrong: {
        title: "不要在核实前接受订单变更",

        text:
          "包装颜色变化可能影响材料采购、成本和交期。在生产部门确认之前，不能向客户保证没有影响。"
      },

      incomplete: {
        title: "指出了风险，但表达过早封闭",

        text:
          "订单已经生产并不一定意味着完全不能修改。应该先核查生产状态，再向客户说明实际影响。"
      },

      correct: {
        title: "回答正确！",

        text:
          "这个回复没有立即答应或拒绝，而是先核查生产进度、成本和交期，再让客户根据实际影响作出决定。"
      }
    }
  },
    {
    level: "LEVEL 06 / 样品申请",

    customerName: "Daniel Reed",

    customerRole: "UK Product Manager · Online",

    task: "客户要求免费样品，选择最合适的处理方式",

    message: `
      <p>Hi,</p>

      <p>
        Before placing an order, we would like to receive
        five samples for evaluation.
      </p>

      <p>
        Could you provide the samples free of charge and
        cover the courier cost?
      </p>

      <p>
        Best regards,<br>
        Daniel
      </p>
    `,

    options: [
      {
        type: "wrong",

        text:
          "Thank you for your interest. We can provide five free " +
          "samples and cover the courier cost for your evaluation."
      },

      {
        type: "incomplete",

        text:
          "Thank you for your request. Samples and courier costs " +
          "must be paid before we can arrange delivery."
      },

      {
        type: "correct",

        text:
          "Thank you for your request. The sample cost can be " +
          "credited against your first order, while courier charges " +
          "can be arranged through your account or paid in advance."
      }
    ],

    modelAnswer: `
      <p><strong>Subject: Re: Sample Request</strong></p>

      <p>Hi Daniel,</p>

      <p>
        Thank you for your interest in our bamboo cutlery sets.
        We would be pleased to arrange five samples for your
        evaluation.
      </p>

      <p>
        The sample cost is USD 25 and can be credited against
        your first order. Courier charges can be arranged through
        your DHL or FedEx account, or paid in advance.
      </p>

      <p>
        Please confirm the required styles, delivery address and
        preferred courier method, and we will prepare the samples.
      </p>

      <p>
        Best regards,<br>
        [Your Name]
      </p>
    `,

    keyPhrases: [
      "We would be pleased to arrange...",
      "can be credited against your first order",
      "courier charges can be arranged through...",
      "Please confirm the required..."
    ],

    feedback: {
      wrong: {
        title: "服务积极，但成本风险过高",

        text:
          "在没有确认客户质量和后续订单可能性的情况下承担全部样品及快递费用，容易产生无效成本。"
      },

      incomplete: {
        title: "规则明确，但缺少合作导向",

        text:
          "要求客户承担费用并非错误，但应说明样品费可以在首单中抵扣，并提供快递账户等选择。"
      },

      correct: {
        title: "回答正确！",

        text:
          "这个方案控制了样品成本，同时通过首单抵扣体现合作意愿，也给客户提供了两种快递付款方式。"
      }
    }
  },

  {
    level: "LEVEL 07 / MOQ协商",

    customerName: "Daniel Reed",

    customerRole: "UK Product Manager · Online",

    task: "客户首单数量低于MOQ，选择最佳回复",

    message: `
      <p>Hi,</p>

      <p>
        We understand that your MOQ is 500 sets, but we
        would like to start with 200 sets to test the market.
      </p>

      <p>
        Could you accept this quantity at the quoted price?
      </p>

      <p>
        Best regards,<br>
        Daniel
      </p>
    `,

    options: [
      {
        type: "wrong",

        text:
          "We can accept 200 sets at the quoted price because " +
          "we hope this trial order will lead to larger orders."
      },

      {
        type: "incomplete",

        text:
          "Our MOQ is 500 sets, so we are unable to accept " +
          "an order for only 200 sets at this time."
      },

      {
        type: "correct",

        text:
          "We can review 200 sets as a trial order using standard " +
          "packaging. The unit price may need adjustment because " +
          "the quantity is below our normal production level."
      }
    ],

    modelAnswer: `
      <p><strong>Subject: Re: Trial Order Quantity</strong></p>

      <p>Hi Daniel,</p>

      <p>
        Thank you for explaining your trial-order plan.
        We understand that you would like to test market demand
        before committing to a larger quantity.
      </p>

      <p>
        We can review an initial order of 200 sets using our
        standard product specifications and packaging. As this
        quantity is below our standard MOQ, the unit price would
        need to be adjusted to cover the production setup cost.
      </p>

      <p>
        Alternatively, we can maintain the quoted price for an
        order of 500 sets. Please let us know which option you
        would prefer us to quote.
      </p>

      <p>
        Best regards,<br>
        [Your Name]
      </p>
    `,

    keyPhrases: [
      "We understand that you would like to...",
      "We can review an initial order of...",
      "the unit price would need to be adjusted",
      "Alternatively, we can..."
    ],

    feedback: {
      wrong: {
        title: "不要忽略小批量的成本变化",

        text:
          "直接用500套的价格接受200套，可能无法覆盖生产准备、包装和管理成本。"
      },

      incomplete: {
        title: "拒绝合理，但没有寻找成交方案",

        text:
          "坚持MOQ可以控制成本，但完全拒绝会失去试单机会。可以提供标准包装或调整单价作为替代。"
      },

      correct: {
        title: "回答正确！",

        text:
          "这个回复理解客户试单需求，同时说明低于MOQ可能影响单价，并提供标准包装方案。"
      }
    }
  },

  {
    level: "LEVEL 08 / 交期延误",

    customerName: "Daniel Reed",

    customerRole: "UK Product Manager · Online",

    task: "订单可能延期，选择最专业的通知方式",

    message: `
      <p>Hi,</p>

      <p>
        Our order was expected to be shipped this week,
        but we have not received the shipping documents.
      </p>

      <p>
        Could you explain the delay and confirm the new
        shipping date?
      </p>

      <p>
        Best regards,<br>
        Daniel
      </p>
    `,

    options: [
      {
        type: "wrong",

        text:
          "We are sorry, but the shipping company caused the delay. " +
          "We are waiting for them to confirm the new schedule."
      },

      {
        type: "incomplete",

        text:
          "We apologise for the delay. Your order is nearly ready, " +
          "and we will send the documents as soon as possible."
      },

      {
        type: "correct",

        text:
          "We apologise for the delay. Final inspection will finish " +
          "on Tuesday, and shipment is now scheduled for Thursday. " +
          "We will send the documents once the booking is confirmed."
      }
    ],

    modelAnswer: `
      <p><strong>Subject: Updated Shipping Schedule</strong></p>

      <p>Hi Daniel,</p>

      <p>
        We sincerely apologise that the order was not shipped
        within the original schedule.
      </p>

      <p>
        Final inspection required additional time and is now
        expected to be completed on Tuesday. We have arranged
        shipment for Thursday, 18 November.
      </p>

      <p>
        We will send you the booking confirmation by Tuesday
        afternoon and provide the complete shipping documents
        immediately after departure.
      </p>

      <p>
        We understand the impact this delay may have on your
        schedule and will keep you updated until the goods
        have been dispatched.
      </p>

      <p>
        Best regards,<br>
        [Your Name]
      </p>
    `,

    keyPhrases: [
      "We sincerely apologise that...",
      "is expected to be completed on...",
      "We have arranged shipment for...",
      "We will keep you updated until..."
    ],

    feedback: {
      wrong: {
        title: "不要只把责任推给第三方",

        text:
          "即使延误来自物流公司，供应商仍应负责协调和更新。这个回复没有给出明确时间。"
      },

      incomplete: {
        title: "态度正确，但缺少可执行信息",

        text:
          "道歉和说明订单接近完成还不够，客户需要明确的新发货日期和单据更新时间。"
      },

      correct: {
        title: "回答正确！",

        text:
          "这个回复承认延误，给出检查完成日、发货日和单据更新时间，让客户能够调整安排。"
      }
    }
  }
];