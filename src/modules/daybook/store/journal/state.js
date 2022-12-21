

export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), //123424536
            date: new Date().toDateString(), //sabado 23 julio
            text: 'Esse et amet mollit id cupidatat ut qui irure consectetur exercitation occaecat qui.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000, //123424536
            date: new Date().toDateString(), //sabado 23 julio
            text: 'Elit elit commodo incididunt tempor exercitation.',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000, //123424536
            date: new Date().toDateString(), //sabado 23 julio
            text: 'Veniam duis deserunt consectetur laboris anim qui deserunt ad consequat ad occaecat enim qui mollit.',
            picture: null,
        }
    ]
})