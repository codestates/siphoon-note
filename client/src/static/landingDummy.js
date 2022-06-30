const dummy = [
  {
    id: 0,
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    writer: 'Lorem Ipsum',
    isPublic: true,
    createdAt: '2022-04-07',
  },
  {
    id: 1,
    content: `의심이 많아진 사람의 마음이 있었지
    그도 믿고 싶었지
    싸구려 위로가
    이곳저곳을 들쑤시고 다녔지
    연약한 마음만 노렸지
    이곳에는 함정들이 너무 많았지
    완벽한 태도에도 완벽한 진심에도
    더한 불행들이 너의 주변에 필요했지
    네가 지닌 불행을 지울 수만 있다면야
    한 사람에게 너무 냉혹했었지
    그 사람을 아주 잃어버릴 만큼
    세계가 질려버렸던
    사람의 마음이 있었지
    그도 그러기 싫었지
    어설픈 안부가
    이곳저곳을 헤매이고 다녔지
    어떤 궁금증도 없었지`,
    writer: '의심이많아진사람',
    isPublic: true,
    createdAt: '2022-04-06',
  },
  {
    id: 2,
    content: `나의 생각은 내가 아니다. 나는 생각을 관찰하는 존재다. 마음 속에 떠오르는 생각(구름)들은 자연스러운 것이다. 지나가게 하라, 이 말이 좋다.`,
    writer: '이수리',
    isPublic: true,
    createdAt: '2022-04-05',
  },
  {
    id: 3,
    content:
      '사랑과 우정은 무엇이 다를까. 사랑의 속성은 결국 몰입에 있는 거 아닐까. 내 우주가 그 사람을 구심점으로 돌아가는 것. 지속하는 관계는 일종의 수련이 아닐까. 매일 갈고 닦는 것. 맹목적으로 믿는 것.',
    writer: '지나가는사람',
    isPublic: true,
    createdAt: '2022-04-04',
  },
  {
    id: 4,
    content:
      '야옹야옹야오오오옹옹옹야오오옹~ 야오오오오옹~ 야옹야옹야오오오옹옹옹야오오옹~ 야오오오오옹~ 야옹야옹야오오오옹옹옹야오오옹~ 야오오오오옹~',

    writer: '이솜',
    isPublic: true,
    createdAt: '2022-04-03',
  },
  {
    id: 5,
    content:
      '사라지는 꿈을 꾸곤 해 숨을 곳을 찾아 떠날래 상처 뿐인 여길 벗어나 숨을 쉴 수 있길 바라네',
    writer: '술탄오브더디스크',
    isPublic: true,
    createdAt: '2022-04-01',
  },
  {
    id: 6,
    content:
      '아마 이 얘긴 너에게 달갑지 않을 거야 우린 스스로 괜찮아져야만 할 테니까 바로 지금도 똑같이 기록되겠지 너에게 닿지 못했으니까 아마 이 얘긴 처음 보는 종류는 아닐 거야',
    writer: '김제형',
    isPublic: true,
    createdAt: '2022-03-14',
  },
  {
    id: 7,
    content: `도망가자
    어디든 가야 할 것만 같아
    넌 금방이라도 울 것 같아
    괜찮아
    우리 가자
    걱정은 잠시 내려놓고
    대신 가볍게 짐을 챙기자
    실컷 웃고 다시 돌아오자 거기서는 우리 아무 생각말자
    너랑 있을게 이렇게
    손 내밀면 내가 잡을게
    있을까 두려울 게
    어디를 간다 해도
    우린 서로를 꼭 붙잡고 있으니
    너라서 나는 충분해
    나를 봐 눈 맞춰줄래
    너의 얼굴 위에 빛이 스며들 때까지
    가보자 지금 나랑
    도망가자`,
    writer: '선우정아',
    isPublic: true,
    createdAt: '2022-03-10',
  },
  {
    id: 8,
    content: `바람 어디에서 부는지
    덧문을 아무리 닫아보아도
    흐려진 눈앞이 시리도록
    날리는 기억들
    어느 샌가 아물어버린
    고백에 덧난 그 겨울의 추억
    아 힘겹게 사랑한 기억
    이제는 뒤돌아 갔으니
    바람은 또 어디에서
    불어오는지
    내 맘에 덧댄 바람에
    창 닫아보아도
    흐려진 두 눈이
    모질게 시리도록
    떠나가지 않는 그대
    혼자라는 게
    때론 지울 수 없는 낙인처럼
    살아가는 게
    나를 죄인으로 만드네`,
    writer: '루시드폴',
    isPublic: true,
    createdAt: '2022-03-09',
  },
  {
    id: 9,
    content:
      '아이스박스에 있던 자두는 내가 먹어버렸어. 아침 식사로 남겨둔 걸 테지. 용서해요, 그런데 자두는 맛있었어. 아주 달고 아주 시원했어.',
    writer: '패터슨',
    isPublic: true,
    createdAt: '2022-03-06',
  },
  {
    id: 9,
    content:
      '의심이 많아진 사람의 마음이 있었지 그도 믿고 싶었지 싸구려 위로가 이곳저곳을 들쑤시고 다녔지 연약한 마음만 노렸지 이곳에는 함정들이 너무 많았지 완벽한 태도에도 완벽한 진심에도 더한 불행들이 너의 주변에 필요했지 네가 지닌 불행을 지울 수만 있다면야 한 사람에게 너무 냉혹했었지 그 사람을 아주 잃어버릴 만큼',
    writer: '김제형',
    isPublic: true,
    createdAt: '2022-03-05',
  },
  {
    id: 9,
    content: `존재하지 않는 의미와 가치를 상상하면서 있다고 믿으며 살아가는 것이 삶인 것 같다. 그게 정말 있는지, 아닌지는 중요하지 않다. 내가 무엇을 선택해서 얼마나 실감나게 상상하고 있는지가 중요하다. 결국 상상력으로 살아간다.`,
    writer: '슈리',
    isPublic: true,
    createdAt: '2022-03-04',
  },
];

export default dummy;
