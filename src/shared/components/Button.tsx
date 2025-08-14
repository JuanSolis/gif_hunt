interface buttonProps{
    text: string
    textSize: string
}

export const Button = ({text, textSize}: buttonProps) => {
  return (
    <button
    className={`bg-gray-900 text-white hover:bg-gray-500 hover:text-white rounded-md px-5 py-2 text-${textSize} cursor-pointer`}
  >
    {text}
  </button>
  )
}
