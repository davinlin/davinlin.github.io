var haveNo = [{
                    type: 'ghost',
                    content: '你是不是欺騙我...'
                }, {
                    type: 'ghost',
                    content: '你應該有吧？'
                }]
var haveNo2 = [{
                    type: 'ghost',
                    content: '怎麼會這樣呢？'
                }, {
                    type: 'ghost',
                    content: '仔細想想啊！你有吧？'
                }]
var haveNo3 = [{
                    type: 'ghost',
                    content: '問你一個問題'
                }, {
                    type: 'ghost',
                    content: 'I have 的中文是什麼？'
                }]
var haveNo4 = [{
                    type: 'ghost',
                    content: '好像不太對喔，再給你一次機會'
                }, {
                    type: 'ghost',
                    content: '請問I have 的中文是什麼？'
                }]
var nameResponse = [{
                    type: 'ghost',
                    content: '你的名字怎麼有數字？'
                }, {
                    type: 'ghost',
                    content: '你到底叫什麼？'
                }]

var tellMe = [{
                    type: 'ghost',
                    content: '告訴我阿！'
                }]
var tellMe2 = [{
                    type: 'ghost',
                    content: '怎麼可能，告訴我！'
                }]


/*****************鬼魂的智慧******************/

function iAt(c, place) {
    chkword = place.match(/我/);
    if (chkword != null)
        place = place.replace("我", "你");
    else {
        chkword = place.match(/你/);
        if (chkword != null)
            place = place.replace("你", "我");
    }
    c.content = c.content + place + "啊";
}


function validate(c, word) {
    if (c.id == 'name_input') {
        var name = isNaN(word);
        if (!name) {
            content = nameResponse.concat(c).concat(content);
        }
    }
    if (word.match(/不告訴你/) != null || word.match(/不想告訴你/) != null || word.match(/不想跟你說/) != null) {
        content = tellMe.concat(c).concat(content);
    }
    if (word.match(/不知道/) != null) {
        content = tellMe2.concat(c).concat(content);
        // 告訴我嘛..
    }
}
