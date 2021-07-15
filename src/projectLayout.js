import { selection } from "./function";
import { deleteElementById } from "./taskLayout";
import { display } from "./index";
import {
    addProject,
    deleteProject,
    editProject,
    addEditedProject,
    cancelEditProject
} from './todoListLogic';

const createProjectInput = (() => {

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
        add.classList.add('add-small-btn');
        cancel.classList.add('del-btn');
        add.classList.add('project-btn');
        cancel.classList.add('project-btn');

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
            document.querySelector('#add-project-input-btn').addEventListener('click', addProject);
            document.querySelector('#cancel-project-input-btn').addEventListener('click', deleteProject);
        }
    }

    return {
        layout
    }
})();

const createProjectList = (() => {

    const projectContent = document.querySelector('#project-content');

    function layout(list) {
        const project = document.createElement('div');
        project.id = `project-${list.ID}`;
        project.classList.add('project');
        project.setAttribute('name', `${list.name}`);
        project.setAttribute('nav', `${list.ID}`);
        project.textContent = `${list.name}`;
        projectContent.appendChild(project);
        _addEventListener();
    }

    function deletePreviousDOM() {
        deleteElementById('project-bar');
        const projectList = Array.from(document.querySelectorAll('.project'));
        projectList.forEach((ele) => ele.remove());
    }

    function _addEventListener() {
        const projects = Array.from(document.querySelectorAll('.project'));
        projects.forEach((ele) => ele.addEventListener('click', display.taskByNavItem));
    }

    return {
        layout, deletePreviousDOM
    }
})();

const createEditProjectInput = (() => {

    function addBtn() {
        const title = document.querySelector('#title');
        _deletePreviousDOM('project-edit-btn');
        _deletePreviousDOM('project-del-btn');
        _deletePreviousDOM('project-bar');

        const edit = document.createElement('button');
        edit.textContent = "edit";
        edit.id = "project-edit-btn";
        edit.classList.add('project-btn');
        edit.classList.add('edit-project');
        title.appendChild(edit);

        const del = document.createElement('button');
        del.textContent = "Del";
        del.id = "project-del-btn";
        del.classList.add('project-btn');
        del.classList.add('del-btn');
        del.classList.add('edit-project');

        title.appendChild(del);

        _addEventListenerToBtn();
    }

    function layout() {
        _deletePreviousDOM('project-bar');

        const titleContainer = document.querySelector('#title-container');
        const projectBar = document.createElement('div');
        const input = document.createElement('input');
        const add = document.createElement('button');
        const cancel = document.createElement('button');

        projectBar.id = "project-bar";
        input.id = "project-input";
        add.id = "add-project-input-btn";
        cancel.id = "cancel-project-input-btn";
        add.classList.add('add-small-btn');
        cancel.classList.add('del-btn');
        add.classList.add('project-btn');
        cancel.classList.add('project-btn');

        input.setAttribute('type', 'text');
        const selectedProjectName = selection.getCurrentNav().name;
        input.setAttribute('value', `${selectedProjectName}`);

        add.textContent = "Add";
        cancel.textContent = "X";

        projectBar.style.display = "flex";
        titleContainer.appendChild(projectBar);
        projectBar.appendChild(input);
        projectBar.appendChild(add);
        projectBar.appendChild(cancel);

        _addEventListenerToInputBar();
    }

    function _deletePreviousDOM(id) {
        deleteElementById(`${id}`);
    }

    function _addEventListenerToInputBar() {
        const add = document.getElementById('add-project-input-btn');
        const cancel = document.getElementById('cancel-project-input-btn');
        add.addEventListener('click', addEditedProject);
        cancel.addEventListener('click', cancelEditProject);
    }

    function _addEventListenerToBtn() {
        document.querySelector('#project-edit-btn').addEventListener('click', editProject);
        document.querySelector('#project-del-btn').addEventListener('click', deleteProject);
    }

    return {
        addBtn, layout
    }
})();


export { createProjectInput, createProjectList, createEditProjectInput }