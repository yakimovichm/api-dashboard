import { trigger, transition, style, query, group, animate } from '@angular/animations';

const optional = { optional: true };

export const slideAnimations =
    trigger('routeAnimations', [
        transition('MainPage => RightPage',
            [
                query(':enter, :leave', [
                    style({
                        position: 'fixed',
                        right: 0,
                        width: 'calc(100vw - 20px)'
                    })
                ], optional),
                query(':enter', [
                    style({ right: '-100%' })
                ]),
                group([
                    query(':leave', [
                        animate('600ms ease', style({ right: '100%' }))
                    ], optional),
                    query(':enter', [
                        animate('600ms ease', style({ right: '0%' }))
                    ])
                ])
            ]),
        transition('MainPage => LeftPage',
            [
                query(':enter, :leave', [
                    style({
                        position: 'fixed',
                        left: 0,
                        width: 'calc(100vw - 20px)'
                    })
                ], optional),
                query(':enter', [
                    style({ left: '-100%' })
                ]),
                group([
                    query(':leave', [
                        animate('600ms ease', style({ left: '100%' }))
                    ], optional),
                    query(':enter', [
                        animate('600ms ease', style({ left: '0%' }))
                    ])
                ])
            ]),
        transition('RightPage => MainPage',
            [
                query(':enter, :leave', [
                    style({
                        position: 'fixed',
                        left: 0,
                        width: 'calc(100vw - 20px)'
                    })
                ], optional),
                query(':enter', [
                    style({ left: '-100%' })
                ]),
                group([
                    query(':leave', [
                        animate('600ms ease', style({ left: '100%' }))
                    ], optional),
                    query(':enter', [
                        animate('600ms ease', style({ left: '0%' }))
                    ])
                ])
            ]),
        transition('LeftPage => MainPage',
            [
                query(':enter, :leave', [
                    style({
                        position: 'fixed',
                        right: 0,
                        width: 'calc(100vw - 20px)'
                    })
                ], optional),
                query(':enter', [
                    style({ right: '-100%' })
                ]),
                group([
                    query(':leave', [
                        animate('600ms ease', style({ right: '100%' }))
                    ], optional),
                    query(':enter', [
                        animate('600ms ease', style({ right: '0%' }))
                    ])
                ])
            ])
    ]);