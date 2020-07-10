import React from "react"
import { connect } from "react-redux";
import { useForm } from "react-hook-form"
import { Dispatch } from "redux"
import { AppState } from "../../store"
import { StartCreateTokenAction } from "../../actions/index";
import { Form, Row, Col, Button, ButtonToolbar} from 'react-bootstrap'

type FormData = {
  username: string
  password: string
}

export interface LoginHandler {
  handleOnClickSubmitButton(username: string, password: string): void
}

const mapStateToProps = (state: AppState) => {
  return {}
}

const mapDispatchToProps = (dispatch: Dispatch): LoginHandler => {
  return {
    handleOnClickSubmitButton: (username: string, password: string) => { dispatch(StartCreateTokenAction({ username, password })) }
  }
}

const Login: React.FC<LoginHandler> = (props) => {
  const { register, handleSubmit, errors, reset } = useForm<FormData>()

  const handleOnSubmit = (data: FormData) => {
    props.handleOnClickSubmitButton(data.username, data.password)
    reset()
  }

  return (
    <React.Fragment>
      <img src={require("./img/fusen_fly_man.png")} className="login-image"></img>
    <Form noValidate onSubmit={handleSubmit(handleOnSubmit)}>
      <Form.Group as={Row} controlId={'username'} className="login-form">
        <Form.Label column sm={3} xs={12}>{'ユーザー名'}</Form.Label>
        <Col xs={{ span: 10, offset: 1 }} sm={7}>
          <Form.Control
            name={'username'}
            placeholder={'username'}
            type={'text'}
            isInvalid={errors.username !== undefined}
            ref={register({
              required: "入力が必要です！"
            })}
          />
          {
            errors.username &&
            <Form.Control.Feedback type="invalid">
              {errors.username.message}
            </Form.Control.Feedback>
          }
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId={'password'} className="login-form">
        <Form.Label column sm={3} xs={12}>{'パスワード'}</Form.Label>
        <Col xs={{ span: 10, offset: 1 }} sm={7}>
          <Form.Control
            name={'password'}
            placeholder={'password'}
            type={'password'}
            isInvalid={errors.password !== undefined}
            ref={register({
              required: "入力が必要です！"
            })}
          />
        </Col>
        {
          errors.password &&
          <Form.Control.Feedback type="invalid">
            {errors.password.message}
          </Form.Control.Feedback>
        }
      </Form.Group>
      <Form.Group>
        <Col sm={5} >
          <ButtonToolbar>
            <Button variant={'primary'} type="submit" className="login-button">ログイン</Button>
          </ButtonToolbar>
        </Col>
      </Form.Group>
    </Form>
    </React.Fragment>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)