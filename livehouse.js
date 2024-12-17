var storyContent = ﻿{"inkVersion":19,"root":[["^这是一个周末的夜晚。你闲来无事，决定到家附近的街上转转。沿着街道散步，你忽然发现街边有一些穿着时尚、化着妆的男男女女结伴从你公寓附近的地铁站有说有笑地出来。","\n",["ev",{"^->":"0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-0","flg":18},{"s":["^“是有什么活动吗？”",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"0.2.s"},[{"#n":"$r2"}],"\n",{"->":"xiachenguangchang"},{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"xiachenguangchang":[["^你好奇地跟着他们走到一处不常造访的下沉广场。你这才发现，原来平时路过这里总能听见喧闹的声音，是因为这里有一家位置隐蔽的livehouse。","\n","^年轻人们在门口排起队等待入场，你平时也是喜欢听歌的人，经常在朋友圈里刷到朋友们在livehouse享受生活的自拍。","\n",["ev",{"^->":"xiachenguangchang.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“恰好今晚没事干，我看门票也不贵，不如进去看看。”",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"xiachenguangchang.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"ruchang"},{"#f":5}]}],{"#f":1}],"ruchang":[["^由于你来得恰好比较早，因此排在队伍最前端。队伍开始移动，你顺利地来到靠近主舞台的位置。乐队似乎已经调整好乐器，舞台放着暖场的音乐。你站在舞台前等待了片刻，演出准时开始。","\n","^随着气氛慢慢变得热烈，你也开始充分享受乐队的演奏。周围的人群开始随着音乐律动，你于是也举起手握成拳，融入享受的氛围内。","\n","^【Livehouse中的身体知觉】：在Livehouse的演出场景中，照明灯光被刻意调低，营造出一种整体偏暗的环境氛围，强化了受众的听觉体验。音乐传播媒介构建了一个传播空间，此处身体的重要意义被凸显，会更沉浸在音乐世界中。","\n","^【Livehouse中的身体知觉】：列斐伏尔认为空间生产要以人类身体的感官系统为基础，","\n","^是能感知、能抵达人体心灵内部的、能听、能触、有味道的多感官体验空间。这也是享受生活的重要组成部分。","\n","^此时，随着人群缓慢移动，你发现身前突然多了几位高个子的观众。他们的身影完全挡住了你的视线，影响了你沉浸的观感。你决定……","\n",["ev",{"^->":"ruchang.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“那我去舞台侧面看看吧。” ",{"->":"$r","var":true},null]}],["ev",{"^->":"ruchang.0.13.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^“正好有点渴了，我要去后面吧台坐一会。” ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"ruchang.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],{"->":"branch1"},"\n",{"#f":5}],"c-1":["ev",{"^->":"ruchang.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.13.s"},[{"#n":"$r2"}],{"->":"branch2"},"\n",{"#f":5}]}],{"#f":1}],"branch1":["^你因为身前的人太高影响了观看体验，所以决定挤到舞台侧面。你因为身前的人太高影响了观看体验，所以决定挤到舞台侧面。在这里，你感受到灯光如火焰在肆意跳跃，雷鸣般的弦音和重击的鼓点从脚下传来，点燃了一场灵魂的狂欢。音乐轰鸣，如同风暴席卷，让每颗心都沉浸其中，狂野地跃动。","\n","^【Livehouse中的感官刺激】","\n","^Live House 通过音乐和场景营造带动身体各部分的感官刺激， 引导观众沉浸在超现实场域氛围内， 共享即时的情感体验，从而呈现出一种音乐审美状态下的酒神现象和精神激情。","\n","^【Livehouse中的感官刺激】：不断变换的灯光和音乐通过刺激观众的感官使他们的身体做出相应的反应，通过情感与动作的反馈带来一种“自我治理”的感受，以更进一步能完成“自我实现”，积极为自己寻找一个疲惫情绪的发泄口。","\n",{"->":"main"},{"#f":1}],"branch2":["^你因为身前的人太高影响观看体验，加之确实有些口渴，于是决定到舞台后排的吧台区转转。和其他livehouse不同，育音堂的饮料并不贵。","\n","^一些人坐在吧台区少数的座位前听着歌聊天，一些人三三两两地路过这里，你留心了一下，发现他们是要去门外抽烟散心。","\n","^【Livehouse中的社交体验】：根据我们在大众点评上收集到的评论信息，来过育音堂音乐公园店的顾客们普遍认为这里的酒水性价比很高，且经常有免费活动。相比参与到前排与乐队的互动，也有人更愿意在最后排点一杯酒，独自或与朋友们共同享受夜晚的音乐时光。","\n","^【Livehouse中的社交体验】：我们的访谈对象之一指出，由于livehouse内部为无烟环境，许多人会选择在演出中途出门抽一支烟，然后与身边的人聊几句。","\n",{"->":"main"},{"#f":1}],"main":[["^突然，你听到了一阵骚动。周围的人开始欢呼，大家聚在一起。","\n","^在沸腾的空气中，人群开始沿着舞台边缘掀起一场开火车的狂欢。观众们随着节奏紧挨彼此，用脚步踩踏每一个鼓点，形成涌动的人浪，将摇滚的热情与自由传递至角落。","\n","^此时，你决定……","\n",["ev",{"^->":"main.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“这就是传说中的开火车吗？虽然不太懂这些规矩，但我也想参与一下！” ",{"->":"$r","var":true},null]}],["ev",{"^->":"main.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^“我对这种互动环节没兴趣，也不懂要怎么融入，我只想坐着继续听歌。” ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"main.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],{"->":"branch3"},"\n",{"#f":5}],"c-1":["ev",{"^->":"main.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],{"->":"branch4"},"\n",{"#f":5}]}],{"#f":1}],"branch3":["^虽然你还不太懂这些规矩，担心无法很好地融入，但看到气氛如此热烈，自己也想体验一下互动的氛围！于是你也加入进去，搭着前一位观众的肩膀跟随开火车的队伍逐渐来到了前排。","\n","^【Livehouse中的社会疗愈】：大都市呈现出理性、傲慢、矜持和自由的精神生活状态，其中个人对他人所承担的情感义务相对减弱，个人在享受自由空间的同时往往会变得越来越孤独。但在Livehouse中，陌生人之间无关性别的亲密乃至僭越的行为、仪式将这些参与者交融在一起，消弭了空间的社会、经济地位等级，于某个特定的时空为人们的情感沟通和交流创造了新的条件。","\n",{"->":"main2"},{"#f":1}],"branch4":["^你并不打算随着人群去开火车。对第一次体验livehouse文化的你来说，这样怪异的仪式还是有些超纲了。你决定守住自己在吧台前的一小块位置。","\n","^此时，身边一位打扮潮流的客人友善地与你搭话，你们很快熟络起来，发现彼此都非常喜爱今天的乐队演奏的摇滚风格音乐。对方开朗幽默，你们相谈甚欢。","\n","^【Livehouse中的群体认同】：多种风格的小众音乐在Livehouse 得到庇护，作为空间存在的根基，激发了趣缘群体间的认同。","\n","^【Livehouse中的群体认同】：这里的亚文化群体标记更多地来源于文化认同和文化消费。在此，空间成为了一种“审美”与“小众”融合的文化符号商品，观众与音乐人共同构建起有准入门槛的身份认同。","\n","^【Livehouse中的群体认同】：政府通过政策手段对 Livehouse 进行文化性质的 “界定” 和社会位置的 “处置”，以赋予空间以合法性和自主权，推动促成此处的群体认同与价值获取。","\n",{"->":"main2"},{"#f":1}],"main2":[["^此时，台上响起了《杀死那个石家庄人》。","\n",["ev",{"^->":"main2.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“诶，这个歌词好有意思……”",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"main2.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^你听到歌词“如此生活三十年 直到大厦崩塌 云层深处的黑暗啊 淹没心底的景观”，并从中感受到乐队“万能青年旅店”于流动裂变的社会现实中，凝练了青年的时代彷徨和自我审视。你不禁被他们的音乐深深打动，为他们欢呼起来。","\n","^【Livehouse中音乐的反叛性】：中国的LiveHouse通过本土叙事的视角，以敏感和委婉的音乐话语，表达关于中国现实问题和社会变迁的意见和情怀。","\n","^【Livehouse中音乐的反叛性】：具有思想深度的音乐精神促使LiveHouse选择了一条与追求“有序消费”和“休闲机器”主导下的流行音乐工业截然不同的道路——在看似休闲娱乐的消费下孕育着独立音乐艺术的理想胚胎，既强调情感也倡导思想，以偏离、游戏、启蒙和抵抗的方式来影响社会，同时获得自身存在的前提。","\n",{"->":"main3"},{"#f":5}]}],{"#f":1}],"main3":[["^你沉浸在音乐之中，发现乐队开始和舞台下的观众进行互动聊天。这时，你决定……","\n",["ev",{"^->":"main3.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“我不想互动，只想默默听歌，还是去舞台侧面吧。” ",{"->":"$r","var":true},null]}],["ev",{"^->":"main3.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^“这太有意思了，来都来了，我要站在舞台下近距离感受！” ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"main3.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],{"->":"branch5"},"\n",{"#f":5}],"c-1":["ev",{"^->":"main3.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],{"->":"branch6"},"\n",{"#f":5}]}],{"#f":1}],"branch5":["^你无意参与到乐队互动中，于是悄悄走到舞台侧面。在这里，你感受到灯光如火焰在肆意跳跃，与雷鸣般的弦音和重击的鼓点共舞，点燃了一场灵魂的狂欢。音乐轰鸣，如同风暴席卷，让每颗年轻的心都随着节奏狂野地跃动。","\n","^【Livehouse中的身份越界】：Livehouse中的观演者和表演者从既定的社会规范与主流价值体系中逃离，场域内充满“开火车”“Pogo”“舞台跳水”“Moshing”等仪式性活动。演出者与受众之间的界限模糊，社会身份实现了一定程度上的跨越与重构。这一定程度上回应了巴赫金所言：“（在狂欢节中）人回到了自己，并在人们之中感觉到自己是人。”","\n","^【Livehouse中的群体认同】：在演出间隙，表演者会采取一系列富有仪式感的交流方式，以进一步缩短与受众之间的距离，增强现场互动的亲密感与共鸣。","\n",{"->":"end"},{"#f":1}],"branch6":["^你被热烈的氛围所影响，决定停留在舞台近处，进一步参与到与乐队的互动中。进入下半场，乐手开始轮流solo。突然，吉他手注意到了台下积极互动的你，并将手中的拨片递给你。你惊喜地接过，发现这是自己第一次如此近距离与歌手互动。","\n","^在最后encore环节，大家的热情愈发高涨，全场合唱，你也跟随周围乐队的资深粉丝一起伴随着音乐律动起来。","\n","^【Livehouse中社会关系的重构】：演出结束则意味着仪式阈限阶段的终结，此时在LiveHouse中形成的社会关系再次发生了重构，观众重新迈入现代都市井然有序的社会空间， 回归到正常的社会关系。","\n","^【Livehouse中社会关系的重构】：异质空间的转换影响了人们对角色状态的认知，塑造了罗伯特·帕克所说的市“边缘人”现象，观众需要应对和协调好令人兴奋的、越轨式的特例与日常生活的割裂感，这种割裂感在客观上引发了他们对社会关系和城市日常生活的重新思考。","\n",{"->":"end"},{"#f":1}],"end":[[["ev",{"^->":"end.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^时间不知不觉流逝，演出酣畅淋漓地结束了。",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"end.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^你看到周围的人三三两两地从出口离开，回归充满秩序的都市生活。","\n","^在之后的日子里，你和方才在演出中认识的朋友也止步于交换微信、互相点赞朋友圈的程度，并没有继续深入聊下去。","\n","^【Livehouse内外的身份转变】：演出结束意味着仪式阈限阶段的终结， 在Livehouse中形成的社会关系再次重构，观众重新迈入现代都市井然有序的社会空间，回归到正常的社会关系。 异质空间的转换塑造了城市“边缘人”现象，观众和非全职音乐人需要应对和协调好令人兴奋的、越轨式的特例与日常生活的割裂感，","\n","^【诗性瞬间对日常生活的影响】：列斐伏尔《日常生活批判》第二卷中提出诗性的瞬间，并认为瞬间“通过它们的行动对日常生活做批判”。Livehouse造成的日常与特例之间的割裂感在客观上引发了他们对社会关系和城市日常生活的重新思考。","\n",{"->":"endd"},{"#f":5}]}],{"#f":1}],"endd":[[["ev",{"^->":"endd.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^“下一个有空的周末……是否还要再去一次Livehouse呢？”",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"endd.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^无论你的选择是什么，都希望你能通过这次体验，对这座“城市里的乌托邦”有一个更深入的了解。","\n","end",{"#f":5}]}],{"#f":1}],"#f":1}],"listDefs":{}};