import React from 'react';
import './accordion.css'

class Accordion extends React.Component {
    static defaultProps = {
        section: []
    };
    state = {
        currentSectionIndex: null,
    };

    handleButtonClick = (index) => {
        this.setState({ currentSectionIndex: index })
    }

    renderContent() {
        const currentSection = this.props.section[this.state.currentSectionIndex]
        return (
            <div className="content">
                {currentSection.content}
            </div>
        )
    }

    renderLis() {
        return this.props.section.map((section, index) => (
            <li key={index} className="accordion">
                <button onClick={() => this.handleButtonClick(index)}>
                    {section.title}
                </button>
                {(this.state.currentSectionIndex === index) ? !!this.props.section.length && this.renderContent() : ""}
            </li>
        ))
    }


    render() {
        return  (
            <div className="container">
                <ul>
                    {this.renderLis()}
                </ul>
            </div>
        )
    }
}

export default Accordion;