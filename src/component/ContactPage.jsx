import { useState } from 'react'
import Heading from './Heading'
import Button from './Button'
import { FiMail, FiPhoneCall, FiMapPin } from 'react-icons/fi'

const contactCards = [
  {
    icon: <FiMail />,
    title: 'Email Us',
    text: 'support@grocify.com',
  },
  {
    icon: <FiPhoneCall />,
    title: 'Call Us',
    text: '+977 9876536452',
  },
  {
    icon: <FiMapPin />,
    title: 'Visit Us',
     text: 'Shanti Marg, New Baneshwor, Kathmandu 44600 Nepal',
  },
]

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)

    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      formData.message,
    ].join('\n')

    const mailtoUrl = `mailto:support@grocify.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl

    setSubmitted(true)
    setLoading(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }
  return (
    <section id='contact' className='min-h-screen bg-zinc-50'>
      <div className='mx-auto max-w-[1400px] px-4 py-24 pt-36 md:px-10'>
        <div className='rounded-[2rem] bg-white p-8 shadow-xl shadow-zinc-200/70 ring-1 ring-zinc-100 md:p-12'>
          <div className='grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr]'>
            <div>
              <Heading highlight='Contact' heading='Us' />
              <p className='mt-6 text-lg leading-8 text-zinc-600'>
                Need help with an order or want to share feedback? We’re here to help with fast support and friendly service.
              </p>
              <div className='mt-8 space-y-4'>
                {contactCards.map((item) => (
                  <div key={item.title} className='flex items-start gap-4 rounded-2xl border border-zinc-100 bg-zinc-50 p-4'>
                    <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-orange-400 to-orange-500 text-xl text-white'>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className='text-lg font-semibold text-zinc-800'>{item.title}</h4>
                      <p className='mt-1 text-base text-zinc-600'>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='rounded-[1.5rem] border border-zinc-100 bg-zinc-50 p-6 md:p-8'>
              <h3 className='text-2xl font-semibold text-zinc-800'>Send us a message</h3>
              {submitted && (
                <div className='mt-4 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-green-900'>
                  <p className='font-semibold'>Your email app is opening with your message.</p>
                </div>
              )}
              <form className='mt-6 space-y-4' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='rounded-xl border border-zinc-200 bg-white px-4 py-3 outline-none focus:border-orange-500'
                    placeholder='Your Name'
                    required
                  />
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='rounded-xl border border-zinc-200 bg-white px-4 py-3 outline-none focus:border-orange-500'
                    placeholder='Your Email'
                    required
                  />
                </div>
                <input
                  type='text'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  className='w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 outline-none focus:border-orange-500'
                  placeholder='Subject'
                  required
                />
                <textarea
                  rows='5'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 outline-none focus:border-orange-500'
                  placeholder='Write your message...'
                  required
                />
                <div className='flex flex-col gap-4 sm:flex-row sm:flex-wrap'>
                  <Button
                    content={loading ? 'Sending...' : 'Send Message'}
                    type='submit'
                    disabled={loading}
                    small
                  />
                  <a
                    href='#home'
                    className='inline-flex rounded-lg border border-zinc-300 px-8 py-3 font-semibold text-zinc-700 transition-all duration-300 hover:border-orange-500 hover:text-orange-500'
                  >
                    Back Home
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
