var words = [{
        content: "病痛纏身，拖欠多月後死去，於醫院的病床上，半夜裡突來的死亡。",
        way: "病死"
    }, {
        content: "長期累積的壓力，導致你身體負荷過重，過於忙碌的你延遲就醫，因疾病而死。",
        way: "累死"
    }, {
        content: "天災死亡，在你尚未意識過來時，你已經無法呼吸而死亡了。",
        way: "天災而死"
    }, {
        content: "與你前世的愛人，殉情，上吊而死。",
        way: "殉情而死"
    }, {
        content: "自然死亡。",
        way: "自然死亡"
    }, {
        content: "你是一名學生，因壓力過大，於高樓跳下，自殺而死。",
        way: "壓力太大而死"
    }, {
        content: "一場冤屈進獄，後被判極刑，被丟入深洞中，活埋而死。",
        way: "冤獄而死"
    }, {
        content: "於地震中，難以脫逃，脫水而死。",
        way: "地震渴死"
    }, {
        content: '鏡中的你突然變得太完美，過度自爽而死。',
        way: "自戀而死"
    }, {
        content: '起床照鏡子被帥死。',
        way: "帥死"
    }, {
        content: '打嗝超過100次而死。',
        way: "打嗝至死"
    }, {
        content: '人太正被看死。',
        way: "正到被看死"
    }, {
        content: '你因為吃太飽，不小心噎到而死。',
        way: "噎死"
    }, {
        content: '你因為生性好動，過度跳躍而死。',
        way: "好動而死"
    }, {
        content: '上輩子你是修行人，但因貪戀女色，被亂石打死。',
        way: "好色而死"
    }, {
        content: '你是一個絕世美人，因被眾人所妒忌，因而死。',
        way: "被妒忌而死"
    }, {
        content: '你上輩子長得太過醜陋，半夜起床照到鏡子嚇到而死。',
        way: "醜死"
    }
];

var random = Math.floor(Math.random() * words.length);
var name = localStorage.getItem("name");

if (localStorage.getItem("way") == '未知'){
    localStorage.setItem('way', words[random].way);
    localStorage.setItem('content', words[random].content);
}
var content = localStorage.getItem("content");

$('<p id="title">'+name+' 前世的死亡方式</p>').prependTo($('#deathTitle'));
$('<p id="content">「'+content+'」</p>').prependTo($('#deathCont'));