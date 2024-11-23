// 良好和优秀单选框
    const radioNodeList = [5, 7];
    // 评语
    const  txtAreaList = [
        "老师的课堂讲解生动有趣，让复杂的知识点变得通俗易懂，引人入胜。",
        "老师课堂管理井井有条，确保每位学生都能集中注意力，积极参与讨论。",
        "老师授课风格亲切自然，经常与学生互动，鼓励学生表达观点，激发学习兴趣。",
        "对于学生的疑问，老师总是耐心解答，帮助学生克服学习难点。",
        "老师善于运用多种教学方法，使课堂内容丰富多彩，激发学生兴趣。",
        "老师的讲解条理清晰，逻辑严密，有助于学生构建完整的知识体系。",
        "在课堂上，老师注重与学生的互动，通过提问和讨论增强学生的学习效果。",
        "老师对课程内容有深刻理解，讲解深入浅出，让学生能够轻松掌握。",
        "老师的课堂充满乐趣，让学生在轻松愉快的氛围中学习，提高了学习效率。",
        "老师善于引导学生发现问题，培养学生的自主学习能力和批判性思维。"
    ]
    // 待评价列表
    const tr = document.getElementsByClassName("ui-row-ltr")
    // 待评价数量
    let len = tr.length
    // 每隔5秒评价
    const evaluateItem = (length) => {
        let time = setTimeout(() => {
            len = length - 1
            // 等于0则直接没有评价了
            if (len < 0) {
                clearTimeout(time)
                console.log("评价完成")
                return
            }
            console.log(len)
            // 点击某个列表显示右侧内容
            tr[len].click()
            // 获取是否进行评价
            let title = tr[len].childNodes[7].getAttribute("title")
            // 教师姓名
            let teacherName = tr[len].childNodes[8].getAttribute("title")
            // 课程
            let subject = tr[len].childNodes[9].getAttribute("title")
            // 打印状态
            let printStatus = "教师：" + teacherName + "，课程：" + subject + "，评价成功。"
            // 如果未评价则进行评价
            if (title === "未评") {
                // 防止dom元素再为加载完成后执行
                setTimeout(() => {
                    submit()
                    console.log(printStatus)
                    evaluateItem(len)
                }, 2500)
            } else {
                // 如果已评价则跳过
                console.log(printStatus.replace("评价成功", "已评价"))
                evaluateItem(len)

            }
        }, 5000)
    }
    // 提交评价
    let submit = () => {
	// 绕过
        $("#btn_xspj_tj").data("enter", "1");
        // 生成0-3之间的随机数
        let index = Math.floor(Math.random() * 10)
        // 随机选中良好和优秀
        document.querySelectorAll(".tr-xspj").forEach((v) => {
            const index = Math.floor(Math.random() * 2)
            v.childNodes[3].childNodes[1].childNodes[radioNodeList[index]].childNodes[1].childNodes[1].checked = true
        })
        // 设置评语
        document.getElementById("274FD3B70D2EC4D3E063ECC8A8C07B60_py").value = txtAreaList[index]
        // 自动提交
        document.getElementById("btn_xspj_tj").click()
        document.getElementById("btn_ok").click()
    }
    evaluateItem(len)