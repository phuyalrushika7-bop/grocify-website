const Heading = (props) => {
  return (
    <section>
      <div className='w-fit mx-auto bg-red-300'></div>
            <div>
                <h2 className='text-5xl font-bold text-center'>
                    <span className='text-orange-500'>{props.highlight}</span> {props.heading}
                    <span className='relative inline-block'>
                      <span className='absolute left-1/2 -translate-x-1/2 top-full translate-y-2 w-1/2 h-1 bg-orange-300 rounded'></span>
                    </span>
                </h2>
            </div>
    </section>
     
  )
}

export default Heading
