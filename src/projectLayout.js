import { projectFunc } from "./function";
import { display, navInfo } from "./index";
import { deleteElementById } from './DOMfunction';


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
        projects.forEach((ele) => ele.addEventListener('click',display.taskByProject));
    }

    return {
        layout
    }
})();

const editProject = (() => {

    // function layout() {
    //     _deletePreviousDOM();

    //     const project = document.createElement('div');
    //     const edit = document.createElement('button');
    //     const del = document.createElement('button');

    //     project.classList.add('project');
    //     edit.classList.add('project-btn');
    //     del.classList.add('project-btn');

    //     project.setAttribute('project', `${i}`);
    //     project.setAttribute('name', projectFunc.list[i]);

    //     let navCode = Number(i) + 2;
    //     project.setAttribute('nav',`${navCode}`);

    //     project.id = `project-${i}`;
    //     project.textContent = projectFunc.list[i];
    //     edit.textContent = 'edit';
    //     del.textContent = 'X';

    //     edit.style.display = 'none';
    //     del.style.display = 'none';

    //     projectContent.appendChild(project);
    //     project.appendChild(edit);
    //     project.appendChild(del);

    //     _addEventListener();
    // }

    // function _deletePreviousDOM() {
    //     deleteElementById('project-bar');
    // }

    // function _addEventListener() {
        
    // }

    // return {
    //     layout
    // }
})();

export {  projectInput, projectList, editProject }