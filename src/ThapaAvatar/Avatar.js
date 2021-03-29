import React, { Component } from 'react'
import './Avatar.css';
import AvatarList from './AvatarList'
import 'tachyons';

class Avatar extends Component {
    render() {
        const avatarlistarray = [
            {
                id:1,
                name:"vinod",
                work:"web developer"
            }, 
            {
                id:2,
                name:"Baha",
                work:"developer  "
            },
            {
                id:3,
                name:"Thapa",
                work:"web developer"
            },
            {
                id:4,
                name:"Tush",
                work:"Developer"
            },
            {
                id:5,
                name:"vinod",
                work:"web developer"
            }, 
            {
                id:6,
                name:"vinod",
                work:"web developer"
            }
        ]

        const arrayavatarcard = avatarlistarray.map( (avatarcard, i) => {
            return <AvatarList id={avatarlistarray[i].name}
                           name={avatarlistarray[i].name}
                           work={avatarlistarray[i].work} />
        })


        return (
            <div className="mainpage">
                <h1> Welcome to Avatar World</h1>
                    {arrayavatarcard}
                <button > Subscribe </button>
                
            </div>
        )
    }
}

export default Avatar
