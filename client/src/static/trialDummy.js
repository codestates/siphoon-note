const dummy = [
  {
    essayId: 17,
    tag: ['체험'],
    content:
      '체험용 페이지에 오신걸 환영합니다! :) 체험용 페이지에 남기시는 글은 저장되지 않습니다. 데이터 분석 기능을 사용할 수 없습니다.',
    createdAt: '2022-04-11',
    isPublic: false,
    isDeleted: false,
  },
  {
    essayId: 16,
    tag: ['애니메이션'],
    content: `메세지에 마우스를 올리면 나타나는 아이콘을 따라가보세요!`,
    createdAt: '2022-04-09',
    isPublic: false,
    isDeleted: false,
  },
  {
    id: 15,
    tag: ['술탄', '노래'],
    content:
      '사라지는 꿈을 꾸곤 해 숨을 곳을 찾아 떠날래 상처 뿐인 여길 벗어나 숨을 쉴 수 있길 바라네',
    createdAt: '2022-04-09',
    isPublic: true,
    isDeleted: false,
  },
  {
    id: 14,
    tag: ['의심', '김제형', '노래'],
    content:
      '의심이 많아진 사람의 마음이 있었지 그도 믿고 싶었지 싸구려 위로가 이곳저곳을 들쑤시고 다녔지 연약한 마음만 노렸지 이곳에는 함정들이 너무 많았지 완벽한 태도에도 완벽한 진심에도 더한 불행들이 너의 주변에 필요했지 네가 지닌 불행을 지울 수만 있다면야 한 사람에게 너무 냉혹했었지 그 사람을 아주 잃어버릴 만큼',
    createdAt: '2022-04-08',
    isPublic: true,
    isDeleted: false,
  },
  {
    id: 13,
    tag: ['우정', '사랑'],

    content:
      '사랑과 우정은 무엇이 다를까. 사랑의 속성은 결국 몰입에 있는 거 아닐까. 내 우주가 그 사람을 구심점으로 돌아가는 것. 지속하는 관계는 일종의 수련이 아닐까. 매일 갈고 닦는 것. 맹목적으로 믿는 것.',
    createdAt: '2022-04-06',
    isPublic: true,
    isDeleted: false,
  },
  {
    essayId: 12,
    tag: ['상상', '가치'],
    content: `존재하지 않는 의미와 가치를 상상하면서 있다고 믿으며 살아가는 것이 삶인 것 같다. 그게 정말 있는지, 아닌지는 중요하지 않다. 내가 무엇을 선택해서 얼마나 실감나게 상상하고 있는지가 중요하다. 결국 상상력으로 살아간다.`,
    createdAt: '2022-04-05',
    isPublic: false,
    isDeleted: false,
  },
  {
    essayId: 11,
    tag: ['휴지통', '삭제'],
    content: '이 메세지를 삭제 해보세요!',
    createdAt: '2022-04-04',
    isPublic: false,
    isDeleted: false,
  },
  {
    essayId: 10,
    tag: ['패터슨', '자두'],
    content: `아이스박스에 있던 자두는 내가 먹어버렸어. 아침 식사로 남겨둔 걸 테지. 용서해요, 그런데 자두는 맛있었어. 아주 달고 아주 시원했어.`,
    createdAt: '2022-04-03',
    isPublic: false,
    isDeleted: false,
  },
  {
    essayId: 9,
    tag: ['김제형'],
    content: `카메라가 아닌
    우리 모두의 시선으로부터
    연극은 시작되고 끝을 맺는다.
    끝나고도
    왠지 계속될 것 같은 것들...
    계속 그대로일 것 같은 만남들...`,
    createdAt: '2022-04-02',
    isPublic: false,
    isDeleted: false,
  },
  {
    essayId: 8,
    tag: ['더미'],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdAt: '2022-04-01',

    isPublic: false,
    isDeleted: false,
  },
  {
    essayId: 7,
    tag: ['야옹'],
    content: '솜이야, 솜이야, 솜이야! 나는 너를 아주 많이 사랑해.',
    createdAt: '2022-03-17',

    isPublic: false,
    isDeleted: false,
  },

  {
    essayId: 6,
    tag: ['돌아가자'],
    content: `나는 당신 생각하다 하루가
    다 지나가는 줄도 모르고
    또 이렇게 밤 지새우네
    
    망설이며 주저하던 순간들
    네게 다 주지 못한 마음
    이렇게 또 남아서
    
    난 이제 어쩌면 좋을까
    차라리 다 사라져 버리면 좋겠네
    
    이제 나는 정말 아무렇지 않으니
    돌아가자 익숙한 저 언덕 너머
    혹시 내가 문득 그리워진대도
    돌아가자 길었던 꿈의 반대편으로
    
    어찌하든 흘러가는 시간들
    나는 또 누군가에게 반하고 또 그렇게
    아무 일 없다는 듯이
    내게서 다 사라져 버리면 어쩌나`,
    createdAt: '2022-03-16',
    isPublic: false,
    isDeleted: false,
  },
  {
    essayId: 5,
    tag: ['봄'],
    content: '오늘은 날씨가 좋아서, 햇빛이 드리운 길을 따라 한참을 걸어다녔다.',
    createdAt: '2022-03-15',

    isPublic: true,
    isDeleted: false,
  },
  {
    essayId: 4,
    tag: ['죽음'],
    content:
      '나도 당신처럼 한번 아름다워보자고 시작한 일이 이렇게 나 멀리 흘렀다. 내가 살아있어서 만날 수 없는 당신이 저 세상에 살고 있다. 물론 이 세상에도 두엇쯤 당신이 있다. 만나면 몇 번이고 미안하다고 말하고 싶다.',
    createdAt: '2022-03-13',

    isPublic: false,
    isDeleted: false,
  },
  {
    essayId: 3,
    tag: ['시작'],

    content:
      '내가 무엇을 더 공부하고 싶은지, 깨달았던 시간들. 이게 끝이 아니라 시작이라는 생각이 든다. 화이팅!',
    createdAt: '2022-03-10',

    isPublic: true,
    isDeleted: false,
  },
  {
    essayId: 2,
    tag: ['최선'],

    content:
      '끝에 줄이 제대로 맞지 않는 것이 아쉽긴 하군요. 뭐 어쩌겠어요? 주어진 시간 안에 내가 할 수 있었던 최선을 다했으니, 지금까지 후회는 없어요.',
    createdAt: '2022-03-08',

    isPublic: true,
    isDeleted: false,
  },
  {
    essayId: 1,
    tag: ['테스트'],
    content:
      '테스트로 적어보는 글이에요. 테스트! 아 테스트! 어떤 메모를 적을지는 모르겠습니다.',
    createdAt: '2022-03-06',

    isPublic: true,
    isDeleted: false,
  },
  {
    essayId: 0,
    tag: ['일종의고백'],
    content:
      '사랑은 언제나 내 마음대로 되지 않았고 또 마음은 말처럼 늘 쉽지 않았던 시절 나는 가끔씩 이를테면 계절 같은 것에 취해 나를 속이며 순간의 진심 같은 말로 사랑한다고 널 사랑한다고 나는 너를',
    createdAt: '2022-03-05',
    isPublic: true,
    isDeleted: false,
  },
];

export default dummy;
