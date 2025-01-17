import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import team_bg from '../../Assets/Backgrounds/team_bg.jpg'
import './Team.css';
import TeamData from './TeamData';


const useStyles= makeStyles({
    root:{     
   background: '#654ea3',  /* fallback for old browsers */
    background: '-webkit-linear-gradient(to bottom, #eaafc8, #654ea3)',  /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to bottom, #eaafc8, #642A7F)',/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
        height: '100vh',
        width: '100%',
    },
    header:{  
      paddingTop: '40px',  
      color: '#FFFFFF', 
      fontSize: '3rem',
      display: 'flex',
      justifyContent: 'center',
      fontFamily: 'Rajdhani',
      fontStyle: 'normal',
      fontWeight: 'bold',
      }
})


const Team = (props) => {
const classes=useStyles();

    return (
        <div className={classes.root}>

            <Box className={classes.header}>MEET THE TEAM</Box>
            <main className="page-content">
                {TeamData.map((val) => {

                    return (
                        <>
                            <div className="card" style={{ backgroundImage: `url(${val.imgsrc})` }} >
                                <div className="content">
                                    <h2 className="title">{val.designation} </h2>
                                    <p className="copy"> {val.MebName}</p>
                                    <div>
                                        <a href={val.linkedin} target="_blank"><button className="butn" > <i className="bi bi-linkedin"></i> </button> </a>
                                        <a href={val.instagram} target="_blank">  <button className="butn"  ><i className="bi bi-envelope-fill"></i></button></a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )


                })}

            </main>
        </div>
    )
}


export default Team;
