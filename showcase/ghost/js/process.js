// Process ghost message.
function pre_process(id){
	switch(id) {
		case 'year':
			c.cont = name + '，' + c.cont;
			// c.cont = c.cont.replace( name+'，', '你');
			break;
		case 'go_out':
			c.cont = c.cont.replace('他', friend);
			break;
		case 'last_life':
			c.cont = c.cont.replace('他', friend);
			break;
	}
}

// Process human message.
function process(id, word){
	word = killOther(word);
	switch(id) {
		case 'name':
			word = checkName(word);
			localStorage.setItem('name', word);
			name = word;
			break;
			
		case 'year':
			var correct = false;
			if (word.match(/40/) || word.match(/四十/)){
				if(word.match(/400/)){
					correct = false;
				}else{
				 	correct = true;
				}
			}
			if (correct == true)
				conversation.unshift({
	                act: 'murmur',
				    cont: '沒錯...我已經死了四十年',
				    id:'right_40'
	            });
			else
				conversation.unshift({
	                act: 'murmur',
				    cont: '...我死了四十年呢',
				    id:'wrong_40'
	            });
            break;

        case 'info':
        	var choice;
        	if (word.match(/死/) || word.match(/法/)) 
				choice = 'death';
        	else if (word.match(/性/) || word.match(/別/) || word.match(/男/) || word.match(/女/)) 
				choice = 'gender';
			else if (word.match(/不/) || word.match(/屁/)) 
				choice = 'bad';
			else
				choice = 'null';
			if (choice == 'death'){
				var n = 0;
				conversation.unshift({
	                act: 'murmur',
				    cont: '我小時候常被霸凌，所以都沒朋友',
				    id:'info_death_'+(n++)
	            },{
	            	act: 'murmur',
				    cont: '後來，遇見了一個女孩',
				    id:'info_death_'+(n++)
	            },{
	            	act: 'murmur',
				    cont: '她願意當我朋友...',
				    id:'info_death_'+(n++)
	            },{
	            	act: 'murmur',
				    cont: '某天，她說她要離開了',
				    id:'info_death_'+(n++)
	            },{
	            	act: 'murmur',
				    cont: '不想讓她走，所以我在她喝的水裡下藥',
				    id:'info_death_'+(n++)
	            },{
	            	act: 'murmur',
				    cont: '然後自殺，讓她永遠陪著我...',
				    id:'info_death_'+(n++)
	            });
			}
			else if (choice == 'gender'){
				var n = 0;
				conversation.unshift({
	                act: 'murmur',
				    cont: '22歲，女性，死因：自殺',
				    id:'info_gender_'+(n++)
	            },{
	            	act: 'murmur',
				    cont: '這是我在死亡證明書上看到的...',
				    id:'info_gender_'+(n++)
	            },{
	            	act: 'murmur',
				    cont: '不知道是不是真的...',
				    id:'info_gender_'+(n++)
	            });
			}
			else if (choice == 'bad'){
				var n = 0;
				conversation.unshift({
	                act: 'murmur',
				    cont: '都不想知道嗎',
				    id:'info_bad_'+(n++)
	            },{
	            	act: 'murmur',
				    cont: '這樣也沒關係呢...',
				    id:'info_bad_'+(n++)
	            });
			}
			else if (choice == 'null'){
				var n = 0;
				conversation.unshift({
	                act: 'murmur',
				    cont: '想知道別的嗎？',
				    id:'info_null_'+(n++)
	            },{
	            	act: 'murmur',
	            	cont: '可惜我只記得這兩件事呢...',
				    id:'info_null_'+(n++)
	            });
			}
            break;

        case 'friend':
        	word = checkName(word);
        	friend = word;
			break;

		case 'go_out':
			var ans = checkYn(word);
			if (ans == true){
				conversation.unshift({
	                act: 'murmur',
				    cont: '哇！你們那麼黏 T T 呀',
				    id:'out_tt'
	            });
			}
			else {
				for (var i = 1; i <= 4 ; i++)
					conversation.shift();
				var n = 0;
				conversation.unshift({
	                act: 'murmur',
				    cont: '一定是你太冷血...',
				    id:'out_cold'+(n++)
	            },{
	            	act: 'murmur',
	            	cont: '不然就是其實根本沒有人愛你',
				    id:'out_cold'+(n++)
	            },{
				    act: 'ask',
				    cont: '但'+friend+'一定是個很好的朋友，對吧？',
				    ans: 'word',
				    hint: '',
				    id: 'but_good_friend'
				});
			}
            break;

        case 'know_death':
        	var ans = checkYn(word);
        	if (ans == false){
        		for (var i = 1; i <= 2 ; i++)
					conversation.shift();
				conversation.unshift({
				    act: 'murmur',
				    cont: '就算你不想知道，我還是會跟你說...',
				    id:'see_face'
				}, 
				{
				    act: 'ask',
				    cont: '別怕，讓我看看你的臉好嗎？',
				    ans: 'photo',
				    hint: '請上傳「橫幅照片」',
				    id: 'upload_photo'
				});
			}
            break;


	}
}

function killOther(word) {
	while(word.match(/ /)){
		word = word.replace(' ', '');
	}
	while(word.match(/，/) || word.match(/,/)){
		word = word.replace('，', '');
		word = word.replace(',', '');
	}
	while(word.match(/、/)){
		word = word.replace('、', '');
	}
	while(word.match(/。/) || word.match(/\./)){
		word = word.replace('。', '');
		word = word.replace('.', '');
	}
	while(word.match(/？/) || word.match(/\?/)){
		word = word.replace('？', '');
		word = word.replace('?', '');
	}
	while(word.match(/！/) || word.match(/!/)){
		word = word.replace('！', '');
		word = word.replace('!', '');
	}
	word = word.replace('那你呢', '');
	word = word.replace('你呢', '');
	return word;
}

function checkYn (word) {
	var answer = false;
    word = word.toLowerCase();
    if (word.match(/yes/) || word.match(/ok/) || word.match(/嗯嗯/))
        answer = true;
    if (!word.match(/不/))
        if (word.match(/好/) || word.match(/對/) || word.match(/會/) || word.match(/常/) || word.match(/長/) || word.match(/想/) || word.match(/要/))
        	if (!word.match(/還好/))
        	  	answer = true;
    if (!word.match(/沒/)) {	
        if (word.match(/有/))
            answer = true;
    } else {
        if (word.match(/問題/))
            answer = true;
    }
    return answer;
}

function checkName (word) {
	var chkword;
	if (chkword = word.match(/.+是/))
		word = word.replace(chkword, "");
	if (chkword = word.match(/.+叫做/))
		word = word.replace(chkword, "");
	if (chkword = word.match(/.+叫作/))
		word = word.replace(chkword, "");
	if (chkword = word.match(/.+叫/))
		word = word.replace(chkword, "");
	return word;
}