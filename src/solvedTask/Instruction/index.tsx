import React from 'react';
import './style.css';

export const Instruction: React.FC = () => {
    return (
        <div className="instruction-container">
            <h1>Create an App that will manage the Users</h1>
            <ol>
                <li>Create <strong>Button Component</strong> that will have props of type <strong>(primary or default).</strong></li>
                <li>Create <strong>Users Management Component</strong> that will show all the users.</li>
                <li>Use the Button Component as Minus and Add Button that will have <strong>different types</strong>.</li>
                <li>When you <strong>click Add</strong>, number of users will increase. When <strong>minus</strong>, it will decrease.</li>
                <li>Minimum of <strong>1</strong> users and maximum of <strong>10</strong>.</li>
                <li>Initially we will have 1 user shown in the UI</li>
                <li>You can use the <strong>API</strong> from reqres <strong>(https://reqres.in/api/users/1)</strong>.</li>
                <li>You will only fetch the user once in the API.</li>
                <li>When you fetch the data, <strong>use ComponentDidMount and ComponentDidUpdate only as a practice to understand lifecycles</strong>.</li>
                <li>Make sure to <strong>create interface/types</strong> for your <strong>props/state and API return</strong>.</li>
            </ol>
        </div>
    )
}
