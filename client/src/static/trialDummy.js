const dummy = [
  {
    essayId: 12,
    tag: ['체험', '테스트'],
    content:
      '체험용 페이지에 오신걸 환영합니다! :) 체험용 페이지에 남기시는 글은 저장되지 않습니다. 데이터 분석 기능을 사용할 수 없습니다.',
    createdAt: '2022-04-06',
    isPublic: false,
    isDeleted: false,
  },
  {
    essayId: 11,
    tag: ['체험', '테스트'],
    content:
      '이건 삭제된 메세지예요. 다시 보시고 싶다면 복원 버튼을 눌러볼래요?',
    createdAt: '2022-04-06',
    isPublic: false,
    isDeleted: true,
  },
  {
    essayId: 10,
    tag: ['체험', '테스트'],
    content:
      '체험용 페이지에 오신걸 환영합니다! :) 체험용 페이지에 남기시는 글을 저장되지 않습니다.',
    createdAt: '2022-04-06',
    isPublic: false,
    isDeleted: true,
  },
  {
    essayId: 9,
    tag: ['김제형', '연극처럼', '음악'],
    content: `카메라가 아닌
    우리 모두의 시선으로부터
    연극은 시작되고 끝을 맺는다.
    
    끝나고도
    왠지 계속될 것 같은 것들...
    계속 그대로일 것 같은 만남들...`,
    createdAt: '2022-04-05',

    isPublic: false,
    isDeleted: false,
  },
  {
    essayId: 8,
    tag: ['그래', '반갑다', '정말'],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdAt: '2022-04-04',

    isPublic: false,
    isDeleted: true,
  },
  {
    essayId: 7,
    tag: ['하히', '휴휴효', '먀묘무'],
    content: '솜이야, 솜이야, 솜이야! 나는 너를 아주 많이 사랑해.',
    createdAt: '2022-04-01',

    isPublic: false,
    isDeleted: false,
  },

  {
    essayId: 6,
    tag: ['이영훈', '돌아가자', '노래'],
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
    createdAt: '2022-04-01',
    isPublic: false,
    isDeleted: false,
  },
  {
    essayId: 5,
    tag: ['날씨', '봄', '햇살'],
    content: '오늘은 날씨가 좋아서, 햇빛이 드리운 길을 따라 한참을 걸어다녔다.',
    createdAt: '2022-03-22',

    isPublic: true,
    isDeleted: false,
  },
  {
    essayId: 4,
    tag: ['박준', '삶', '죽음'],
    content:
      '나도 당신처럼 한번 아름다워보자고 시작한 일이 이렇게 나 멀리 흘렀다. 내가 살아있어서 만날 수 없는 당신이 저 세상에 살고 있다. 물론 이 세상에도 두엇쯤 당신이 있다. 만나면 몇 번이고 미안하다고 말하고 싶다.',
    createdAt: '2022-03-20',

    isPublic: false,
    isDeleted: false,
  },
  {
    essayId: 3,
    tag: ['그래', '반갑다', '정말'],

    content:
      '내가 무엇을 더 공부하고 싶은지, 깨달았던 시간들. 이게 끝이 아니라 시작이라는 생각이 든다. 화이팅!',
    createdAt: '2022-03-18',

    isPublic: true,
    isDeleted: false,
  },
  {
    essayId: 2,
    tag: ['그래', '반갑다', '정말'],

    content:
      '끝에 줄이 제대로 맞지 않는 것이 아쉽긴 하군요. 뭐 어쩌겠어요? 주어진 시간 안에 내가 할 수 있었던 최선을 다했으니, 지금까지 후회는 없어요.',
    createdAt: '2022-03-15',

    isPublic: true,
    isDeleted: false,
  },
  {
    essayId: 1,
    tag: ['그래', '반갑다', '정말'],
    content:
      '테스트로 적어보는 글이에요. 테스트! 아 테스트! 어떤 메모를 적을지는 모르겠습니다.',
    createdAt: '2022-03-11',

    isPublic: true,
    isDeleted: false,
  },
  {
    essayId: 0,
    tag: ['그래', '반갑다', '정말'],
    content:
      '사랑은 언제나 내 마음대로 되지 않았고 또 마음은 말처럼 늘 쉽지 않았던 시절 나는 가끔씩 이를테면 계절 같은 것에 취해 나를 속이며 순간의 진심 같은 말로 사랑한다고 널 사랑한다고 나는 너를',
    createdAt: '2022-03-05',
    isPublic: true,
    isDeleted: false,
  },
];

export default dummy;
