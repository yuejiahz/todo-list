import { projectFunc } from "./function";
import { display, navInfo } from "./index";
import { deleteElementByEvent, deleteElementById } from './DOMfunction';


const projectInput = (() => {

    function _deletePreviousDOM() {
        deleteElementById('project-bar');
    }

    function layout() {
        _deletePreviousDOM();
        const projectContent = document.querySelector('#project-content');
        const projectBar = document.createElement('div');
        const input = document.createElement('input');
        const add = document.createElement('button');
        const cancel = document.createElement('button');

        projectBar.id = "project-bar";
        input.id = "project-input";
        add.id = "add-project-input-btn";
        cancel.id = "cancel-project-input-btn";

        input.setAttribute('type', 'text');
        input.setAttribute('value', 'Default project');

        add.textContent = "Add";
        cancel.textContent = "X";

        projectBar.style.display = "flex";
        projectContent.appendChild(projectBar);
        projectBar.appendChild(input);
        projectBar.appendChild(add);
        projectBar.appendChild(cancel);
        _addEventListener();
    }

    function _addEventListener() {
        if (!!document) {
            document.querySelector('#add-project-input-btn').addEventListener('click', projectFunc.add);
            document.querySelector('#cancel-project-input-btn').addEventListener('click', projectFunc.del);
        }
    }

    return {
        layout
    }
})();

const projectList = (() => {

    const projectContent = document.querySelector('#project-content');

    function layout() {

        _deletePreviousDOM();
        for (let i in projectFunc.list) {
            const project = document.createElement('div');

            project.id = `project-${i}`;
            project.classList.add('project');
            project.setAttribute('project', `${i}`);
            project.setAttribute('name', projectFunc.list[i]);

            let navCode = Number(i) + 2;
            project.setAttribute('nav',`${navCode}`);

            project.textContent = projectFunc.list[i];
            projectContent.appendChild(project);
        }
        _addEventListener();
    }

    function _deletePreviousDOM() {
        deleteElementById('project-bar');
        const projectList = Array.from(document.querySelectorAll('.project'));
        projectList.forEach((ele) => ele.remove());
    }

    function _addEventListener() {
        const projects = Array.from(document.querySelectorAll('.project'));
        projects.forEach((ele) => ele.addEventListener('click',display.taskByNavItem));
    }

    return {
        layout
    }
})();

const editProject = (() => {

    function addBtn() {
        const title = document.querySelector('#title');
        const edit = document.createElement('button');
        edit.textContent = "edit";
        edit.id = "project-edit-btn";
        title.appendChild(edit);

        const del = document.createElement('button');
        del.textContent = "Delete";
        del.id = "project-del-btn";
        title.appendChild(del);

        _addEventListenerToBtn();
    }

    function layout() {
        _deletePreviousDOM();

        const title = document.querySelector('#title');
        const projectBar = document.createElement('div');
        const input = document.createElement('input');
        const add = document.createElement('button');
        const cancel = document.createElement('button');

        projectBar.id = "project-bar";
        input.id = "project-input";
        add.id = "add-project-input-btn";
        cancel.id = "cancel-project-input-btn";

        input.setAttribute('type', 'text');

        let lastSelectedProject = navInfo.project[navInfo.project.length-1];
        input.setAttribute('value', `${lastSelectedProject}`);

        add.textContent = "Add";
        cancel.textContent = "X";

        projectBar.style.display = "flex";
        title.appendChild(projectBar);
        projectBar.appendChild(input);
        projectBar.appendChild(add);
        projectBar.appendChild(cancel);

        _addEventListenerToInputBar();
    }

    function _deletePreviousDOM() {
        deleteElementById('project-bar');
    }

    function _addEventListenerToInputBar() {
        const add =  document.getElementById('add-project-input-btn');
        const cancel = document.getElementById('cancel-project-input-btn');
        add.addEventListener('click', projectFunc.update);
        cancel.addEventListener('click', deleteElementByEvent);
    }

    function _addEventListenerToBtn() {
        document.querySelector('#project-edit-btn').addEventListener('click', layout);
        document.querySelector('#project-del-btn').addEventListener('click', projectFunc.del);
    }

    return {
        addEditBtn: addBtn
    }
})();

export {  projectInput, projectList, editProject }