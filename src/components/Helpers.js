export const randomize = (arr) => {
    return arr.sort(function(a, b) {
        return 0.5 - Math.random();
    })
}

export const single = (arr => arr.shift())

export const selectItem = (e) => {
    if (e.target === e.currentTarget) {
        return false;
    } else {
        let getChildren = e.currentTarget.childNodes;
        let getTarget = e.target;
        for (let i = 0; i < getChildren.length; i++) {
            let getId = getChildren[i].id;
            let child = getChildren[i];
            if (getTarget === child) {
                getTarget.className = 'selected';
            } else {
                child.className = '';
            }
        }
    }
}