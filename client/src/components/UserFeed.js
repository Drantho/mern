import { React, useState, useEffect } from 'react';

import { Text, Box, Grommet } from 'grommet';

import API from '../utils/API';

import UserFeedComment from './UserFeedComment';
import UserFeedQuestion from './UserFeedQuestion';
import UserFeedAnswer from './UserFeedAnswer';
import UserFeedRating from './UserFeedRating';

import cardTheme from './cardTheme.json';

export default function UserFeed(props) {

    const [ entityList, setEntityList ] = useState([]);

    useEffect( async () => {

        const services = (await API.getServicesByUser(props.targetUser.id)).data;
        const questions = (await API.getQuestionByUser(props.targetUser.id)).data;
        const answers = (await API.getAnswersByUser(props.targetUser.id)).data;
        const comments = (await API.getCommentsByUser(props.targetUser.id)).data;
        const ratings = (await API.getRatingsByUser(props.targetUser.id)).data;

        services.forEach(e => (e.entityType = 'service' ))
        questions.forEach(e => (e.entityType = 'question' ))
        answers.forEach(e => (e.entityType = 'answer' ))
        comments.forEach(e => (e.entityType = 'comment' ))
        ratings.forEach(e => (e.entityType = 'rating' ))

        const entities = [...services, ...questions, ...answers, ...comments, ...ratings];

        entities.sort( (a, b) => {

            const aDate = new Date(a.createdAt);
            const bDate = new Date(b.createdAt);

            if (aDate > bDate) {
                return -1;
            } else if (aDate < bDate) {
                return 1;
            } else {
                return 0;
            }
        } );

        setEntityList(entities);

    }, []);

    return (
        <Grommet theme={cardTheme}>
        <Box pad='15px' align='center' gap='xsmall'>
            {
                entityList.map( e => {
                    switch (e.entityType) {
                        case 'comment':
                            return <UserFeedComment 
                                        targetUser={props.targetUser} 
                                        userState={props.userState}
                                        comment={e} />
                        case 'question':
                            return <UserFeedQuestion 
                                        targetUser={props.targetUser} 
                                        userState={props.userState} 
                                        question={e} />
                        case 'answer':
                            return <UserFeedAnswer 
                                        targetUser={props.targetUser}
                                        userState={props.userState} 
                                        answer={e}/>
                        case 'rating':
                            return <UserFeedRating
                                        targetUser={props.targetUser}
                                        userState={props.userState} 
                                        rating={e} />
                    }
                })
            }
            
        </Box>
        </Grommet>
    )
}
