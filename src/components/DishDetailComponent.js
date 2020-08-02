import React from 'react';
import { Card, CardImg,  CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem,Button } from 'reactstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
    function RenderDish({dish}) {
        if (dish!=null){
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle><strong>{dish.name}</strong></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comments,addComment,dishId}) {
        if(comments != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                        {comments.map(comment => (
                            <ul className="list-unstyled" key={comment.id}>
                                <li>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author} , {moment(comment.date).format('MMM DD, YYYY')}</p>
                                </li>
                            </ul>
                        )
                    )}
                    <CommentForm dishId={dishId} addComment={addComment}/>
                
                </div>);
        } else {
            return(
                <div></div>
            );
        }
    }
    const DishDetail=(props) =>{
        console.log('DishDetail Component render is invoked!')
        return(
            <div className="container">
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
                </div>
               <div className="row">
                <RenderDish dish={props.dish}/>
                <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id} />
                </div>
            </div>
        );
    }

export default DishDetail;