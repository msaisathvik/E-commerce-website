import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officiis voluptatibus veniam maiores ex vero soluta quod, nesciunt similique voluptas rerum sit natus aliquid vitae, fuga sequi sapiente nostrum suscipit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptas maxime? Voluptatum quisquam laboriosam optio culpa consequatur, consectetur, vitae, architecto porro praesentium obcaecati tempora natus enim adipisci iste asperiores aliquid.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, incidunt. Minima molestias quidem, a mollitia reprehenderit facere debitis quam consequuntur sunt. Eaque molestias ea in consequuntur nostrum dolore aliquam nobis.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Quality Assurance:</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro veniam itaque distinctio inventore. Minima, nam culpa placeat in, dolorum quidem omnis sunt delectus dignissimos provident necessitatibus ea nihil autem inventore?  </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Convinience:</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro veniam itaque distinctio inventore. Minima, nam culpa placeat in, dolorum quidem omnis sunt delectus dignissimos provident necessitatibus ea nihil autem inventore?  </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Exceptional Customer Service:</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro veniam itaque distinctio inventore. Minima, nam culpa placeat in, dolorum quidem omnis sunt delectus dignissimos provident necessitatibus ea nihil autem inventore?  </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About