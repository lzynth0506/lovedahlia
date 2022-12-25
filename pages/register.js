import Link from "next/link";
import { Component } from "react";
import { DropdownDate, DropdownComponent } from "react-dropdown-date";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { date: null, selectedDate: '1900-1-1' };
    }

    render() {
        const formatDate = (date) => {
            let d = new Date(date),
              month = "" + (d.getMonth() + 1),
              day = "" + d.getDate(),
              year = d.getFullYear();
          
            if (month.length < 2) month = "0" + month;
            if (day.length < 2) day = "0" + day;
          
            return [year, month, day].join("-");
        };
    
        return (
            <section className="bg-[url('/assets/background-login.png')] bg-no-repeat bg-cover relative w-screen h-screen">
                <main className="grid h-screen place-items-center">
                    <form className="p-12 bg-white rounded-2xl w-100">
                        <header className="text-center mb-4">
                            <h2 className="font-bold text-3xl">Create account</h2>
                            <p>Wow, it's real this is your first time huh</p>
                        </header>
                        <div className="flex flex-col mb-2">
                            <label className="mb-2 uppercase font-bold text-sm">email address</label>
                            <input type={'email'} className="border border-black p-2 px-4 rounded-lg" required />
                        </div>
                        <div className="flex flex-col mb-2">
                            <label className="mb-2 uppercase font-bold text-sm">username</label>
                            <input type={'text'} className="border border-black p-2 px-4 rounded-lg" required />
                        </div>
                        <div className="flex flex-col mb-2">
                            <label className="mb-2 uppercase font-bold text-sm">password</label>
                            <input type={'password'} className="border border-black p-2 px-4 rounded-lg" required />
                        </div>
                        <div className="relative mb-2">
                            <label className="uppercase font-bold text-sm">birthdate</label>
                                <DropdownDate 
                                    selectedDate={                    
                                        this.state.selectedDate        
                                    }
                                    order={[
                                        DropdownComponent.month,                          
                                        DropdownComponent.day,         
                                        DropdownComponent.year,
                                    ]}
                                    onDateChange={(date) => {
                                        console.log(date);
                                        this.setState({ date: date, selectedDate: formatDate(date)})
                                    }}
                                    options={{
                                        yearReverse: true,             
                                    }}
                                    classes={{
                                        dateContainer: 'flex items-stretch',
                                        monthContainer: 'w-full',
                                        yearContainer: 'w-full',
                                        monthContainer: 'w-full mr-4',
                                        dayContainer: 'w-full mr-4',
                                        year: 'bg-inherit border border-black p-2 px-4 rounded-lg w-full',
                                        month: 'bg-inherit border border-black p-2 px-4 rounded-lg w-full',
                                        day: 'bg-inherit border border-black p-2 px-4 rounded-lg w-full',
                                    }}
                                />

                            </div>
                        <div className="mb-2">
                            <Link href="/login" className="text-red-500 text-sm">
                                Already have an account?
                            </Link>
                        </div>
                        <button className="w-full text-center bg-red-500 p-2 rounded-lg font-bold text-white mb-4">
                            Continue
                        </button>
                        <div id="register-page" className="text-sm">
                            <span>By registering, you're about to follow the Guidelines and Privacy Policy.</span>
                        </div>
                    </form>
                </main>
            </section>
        )
    }
}