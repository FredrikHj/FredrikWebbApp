export const navRouteName = {
    headLine0: { name: 'Welcome', route: '/Welcome', id: 'welcome' },

    headLine1: { name: 'Utveckling', route: 'Utveckling', id: '/Developing', subHead: {
            headLine1: {name: 'Frontend (Webb)', route: 'Frontend', id: '/Frontend'},
            headLine2: {name: 'Backend (Webb)', route: 'Backend', id: '/Backend'},
            headLine3: {name: '3D Modellering', route: '3dMod', id: '/3dMod'},
        }
    },
    headLine2:  { name: 'Mina Projekt', route: 'MinaProjekt', id: '/MyProjects', subHead: {
            headLine1: {name: '', route: '', id: ''},
            headLine2: {name: '', route: '', id: ''},
            headLine3: {name: '', route: '', id: ''},
        }
    },
    lastHeadLine:  { name: 'Om Mig', route: 'OmMig', id: 'omMig' },
}