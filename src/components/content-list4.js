import React from 'react'

import PropTypes from 'prop-types'

import Banner13 from './banner13'
import Pricing13 from './pricing13'
import './content-list4.css'

const ContentList4 = (props) => {
  return (
    <div
      className={`content-list4-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="content-list4-max-width thq-section-max-width thq-flex-column">
        <div className="content-list4-content thq-flex-column">
          <ul className="content-list4-ul thq-flex-column">
            <li className="content-list4-li list-item thq-flex-column">
              <p className="content-list4-content7 thq-body-small">
                {props.content7}
              </p>
              <ul className="content-list4-ul1 thq-flex-column">
                <li className="list-item"></li>
                <li className="list-item"></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="content-list4-content1 thq-flex-column">
          <div className="content-list4-container1">
            <ul className="content-list4-ul2 thq-flex-column">
              <li className="content-list4-li3 list-item thq-flex-column"></li>
            </ul>
          </div>
        </div>
      </div>
      <Banner13 heading1="CATERING" className=""></Banner13>
      <Pricing13
        plan1Price="$18.99 Per Person"
        plan2Price="$23.99 Per Person"
        plan1Feature1="1 Meat"
        plan1Feature2="Salad or Coleslaw"
        plan1Feature3="2 Sides"
        plan2Feature1="2 Meats"
        plan2Feature2="Salad or Coleslaw"
        plan2Feature3="2 Sides"
        plan2Feature4="1  16oz. Sauce"
        plan1Feature11="1  16oz. Sauce"
        plan1Feature21="*Plates, plastic ware, and napkins provided"
        plan2Feature11="*Plates, plastic ware, and napkins provided"
        className=""
      ></Pricing13>
      <span className="content-list4-text">{props.text}</span>
      <span className="content-list4-text1">{props.text1}</span>
    </div>
  )
}

ContentList4.defaultProps = {
  heading11: 'General',
  heading6: 'Enhance Your Workflow',
  content3: 'Populate your designs and mockups without delays.',
  heading13: 'Refunds',
  heading9: 'Products and Services',
  text1: 'Text',
  content7:
    'Lorem ipsum dolor sit amet. Vel dolores illum est aperiam quis nam voluptatem quia et omnis autem qui dolore ullam sed fugiat cumque! Qui accusamus assumenda et molestias eius et error sunt. Id recusandae nostrum ea officiis voluptatem in nisi consequatur sed quia tenetur sit alias molestias qui illum soluta.  Est nesciunt perferendis eum sint rerum 33 cupiditate dolorem id corrupti laboriosam ut debitis veniam ut ipsam fugit vel sunt consequatur. Et nobis quasi et cumque adipisci aut molestiae eligendi quo inventore dicta ea suscipit sequi sed veritatis nemo.',
  content13:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  heading2: 'Multiple Languages',
  heading8: 'General Terms and Conditions',
  content9:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  heading7: 'Terms of service',
  content11:
    'Lorem ipsum dolor sit amet. Nam nihil facilis sit consequuntur internos qui minima rerum ut molestias laudantium aut iusto deserunt. Aut voluptatibus excepturi qui officia laudantium est repellendus tempore hic sunt debitis.  Ut galisum tempore in enim fugit eum pariatur possimus est tenetur nemo et sint sint et dolores Quis. Aut illum perspiciatis rem architecto culpa et fuga aliquid. Est omnis praesentium ut nisi internos rem quod totam et similique quis. Est tempore cumque aut recusandae labore qui error molestiae et possimus quia!  Eum Quis asperiores non nihil tempora qui quia voluptatem aut aspernatur aspernatur aut asperiores labore et sapiente quaerat qui suscipit quia. Ea nesciunt iste aut temporibus culpa sit dignissimos quaerat eum architecto voluptatum et nemo velit At harum harum.',
  text2: 'Text',
  content5: 'Select the desired length of Lorem Ipsum text for your projects.',
  heading5: 'Variety of Text Lengths',
  heading12: 'Damages and issues',
  content10:
    'Lorem ipsum dolor sit amet. Vel dolores illum est aperiam quis nam voluptatem quia et omnis autem qui dolore ullam sed fugiat cumque! Qui accusamus assumenda et molestias eius et error sunt. Id recusandae nostrum ea officiis voluptatem in nisi consequatur sed quia tenetur sit alias molestias qui illum soluta.  Est nesciunt perferendis eum sint rerum 33 cupiditate dolorem id corrupti laboriosam ut debitis veniam ut ipsam fugit vel sunt consequatur. Et nobis quasi et cumque adipisci aut molestiae eligendi quo inventore dicta ea suscipit sequi sed veritatis nemo.',
  content12:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  heading10: 'Refund Policy',
  text: 'Text',
  content2: 'Choose from a variety of languages to suit your design needs.',
  content4:
    'Ideal for designers and developers who need quick access to Lorem Ipsum text.',
  heading1: 'Customizable Lorem Ipsum Text',
  heading4: 'Perfect for Designers and Developers',
  rootClassName: '',
  heading3: 'Quick and Easy',
  content6:
    'Streamline your workflow by easily adding placeholder text to your designs.',
  content1:
    'Generate placeholder text instantly for your design projects with customizable text lengths.',
}

ContentList4.propTypes = {
  heading11: PropTypes.string,
  heading6: PropTypes.string,
  content3: PropTypes.string,
  heading13: PropTypes.string,
  heading9: PropTypes.string,
  text1: PropTypes.string,
  content7: PropTypes.string,
  content13: PropTypes.string,
  heading2: PropTypes.string,
  heading8: PropTypes.string,
  content9: PropTypes.string,
  heading7: PropTypes.string,
  content11: PropTypes.string,
  text2: PropTypes.string,
  content5: PropTypes.string,
  heading5: PropTypes.string,
  heading12: PropTypes.string,
  content10: PropTypes.string,
  content12: PropTypes.string,
  heading10: PropTypes.string,
  text: PropTypes.string,
  content2: PropTypes.string,
  content4: PropTypes.string,
  heading1: PropTypes.string,
  heading4: PropTypes.string,
  rootClassName: PropTypes.string,
  heading3: PropTypes.string,
  content6: PropTypes.string,
  content1: PropTypes.string,
}

export default ContentList4
