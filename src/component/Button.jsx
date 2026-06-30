const Button = ({
  content = 'Click here',
  small = false,
  type = 'button',
  disabled = false,
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`bg-gradient-to-b from-orange-400 to-orange-500 text-white rounded-lg transition-all duration-300 ${disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer hover:scale-105 hover:to-orange-600'} ${small ? 'px-5 py-2 text-sm' : 'px-8 py-3 text-lg'}`}>
      {content}
    </button>
  )
}
export default Button
