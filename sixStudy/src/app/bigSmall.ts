import { state, trigger,style,transition,animate } from '@angular/animations';

export const bigSmall = trigger('bigSmall', [  //* 1단계 : 에니메이션 이름
    state('open', style({  //* 2단계 : 상태 값이 open인 경우
        height: '200px',
        width: '200px',
        color: 'white',
        opacity: 1,
        backgroundColor: 'blue'
    })),
    state('closed', style({//* 2단계 : 상태 값이 closed 경우
        height: '100px',
        width: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
    })),
    transition('open => closed', [  //* 3단계 : 상태 값이 open에서 closed로 변하는 경우
        animate('1s')
    ]),
    transition('closed => open', [  //* 3단계 : 상태 값이 closed에서 open로 변하는 경우
        animate('0.5s')
    ]),
])