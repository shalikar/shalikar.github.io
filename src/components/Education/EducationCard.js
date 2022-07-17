import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'
import './Education.css'

function EducationCard({ id, institution, course, startYear, endYear, gpa, courses }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`education-card ${classes.educationCard}`} >
                <div className="educard-img" style={{backgroundColor: theme.primaryExpCardImage}}>
                    <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
                </div>
                <div className="education-details">
                    <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                    <div className="education-align">
                        <h3 style={{color: theme.tertiary}}>{course}</h3> 
                        <h3><span>&nbsp;&nbsp;</span> | <span>&nbsp;&nbsp;</span></h3>
                        <h4 style={{color: theme.tertiary}}>{gpa}</h4>
                    </div>
                    {/* <h6 style={{color: theme.tertiary80}}>{courses}</h6> */}
                    <h4 style={{color: theme.tertiary80}}>{institution}</h4>
                </div>
            </div>
        </Fade>        
    )
}

export default EducationCard
