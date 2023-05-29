import React from "react";
import './Newspaper.css';

// https://btholt.github.io/complete-intro-to-web-dev-v3/project-files/news.html

export function Newspaper(props) {
    return (
        <div>
            <h1>The News Times</h1>

            <div className="navbar">
                <span>Politics</span>
                <span>Technology</span>
                <span>Local</span>
                <span>Opinion</span>
                <span>Sports</span>
            </div>

            <div className="grid-container">
                <article className="art1">
                    <h4>Student Learns HTML</h4>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Sit necessitatibus culpa voluptatibus officiis sed rerum 
                         doloremque animi repudiandae natus blanditiis?
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Sit necessitatibus culpa voluptatibus officiis sed rerum 
                         doloremque animi repudiandae natus blanditiis?
                    </div>
                </article>
                <article className="art2">
                    <h4>
                        BREAKING: Luna is Adorable
                    </h4>
                    <img src="http://pets-images.dev-apis.com/pets/dog25.jpg"></img>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, et?
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, et?
                    </div>
                </article>
                <article className="art3">
                    <h4>CSS Is Apparently a Thing</h4>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, et?
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, et?
                    </div>
                </article>
                
                <article className="art4">
                    <h4>Between the Angle Brackets: Ex</h4>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sit necessitatibus culpa voluptatibus officiis sed rerum 
                        doloremque animi repudiandae natus blanditiis?
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sit necessitatibus culpa voluptatibus officiis sed rerum 
                        doloremque animi repudiandae natus blanditiis?
                    </div>
                </article>
                
                <article className="art5">
                    <h4>Coffee</h4>
                    <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Aperiam obcaecati vero libero dolor et modi hic tenetur porro? 
                     Dolor sequi enim explicabo nihil aliquam assumenda eius, beatae sint aspernatur eveniet.
                    </div>
                    <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Aperiam obcaecati vero libero dolor et modi hic tenetur porro? Dolor
                      sequi enim explicabo nihil aliquam assumenda eius, beatae sint aspernatur eveniet.
                    </div>
                    <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
                    obcaecati vero libero dolor et modi hic tenetur porro? Dolor sequi 
                    enim explicabo nihil aliquam assumenda eius, beatae sint aspernatur eveniet.
                    </div>
                </article>
            </div>

        </div>
    );
}