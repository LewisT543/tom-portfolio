import InputAndSlidingLabel, {InputAndSlidingLabelProps} from "@/fragments/InputAndSlidingLabel";

export interface NewsletterSignupFormProps extends  InputAndSlidingLabelProps{
  prompt: string
  submitText: string
}

export default function NewsletterSignupForm(props: NewsletterSignupFormProps) {
  const { prompt, placeholder, label, submitText } = props
  return (
    <form action="">
      <div
        className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
        <div className="md:ml-auto md:mb-6">
          <div className="">
            <strong>{prompt}</strong>
          </div>
        </div>
        <InputAndSlidingLabel placeholder={placeholder} label={label} />
        <div className="mb-6 md:mr-auto">
          <button
            type="submit"
            className="inline-block rounded border-2 border-neutral-50 px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-color="light">
            {submitText}
          </button>
        </div>
      </div>
    </form>
  )
}