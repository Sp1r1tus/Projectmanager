import React, { Component } from 'react';
import uuid from 'uuid';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';


class AddProject extends Component {
    constructor() {
        super();
        this.state = {
            newProject: {}
        }
    }

    static defaultProps = {
        categories: ['Web Design', 'Web Development', 'Mobile Development']
    }


    handleSubmit(e) {
        if (this.refs.title.value === '') {
            alert('title is required');
        } else {
            this.setState({
                newProject: {
                    id: uuid.v4(),
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }
            }, function () {
                this.props.addProject(this.state.newProject);
            });
        }
        e.preventDefault();
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });


        return (
            <Fabric>
                <div>
                    <h3>Add Project</h3>
                    <form>
                        <div>
                            <label>Title</label><br />
                            <input type="text" ref="title" />
                        </div>

                        <div>
                            <label>Category</label><br />
                            <select ref="category">
                                {categoryOptions}
                            </select>
                        </div>
                        <br />
                        <DefaultButton
                            text='Submit'
                            primary={true}
                            href='#/components/button'
                            onClick={this.handleSubmit.bind(this)}
                        />
                        <br />
                    </form>
                </div>
            </Fabric>
        );
    }
}

//AddProject.propTypes = {
//    category: React.PropTypes.array,
//    addProject: React.PropTypes.func
//}

export default AddProject;
