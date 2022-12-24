import Link from "next/link";
import { Component } from "react";
import { DropdownDate, DropdownComponent } from "react-dropdown-date";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { date: null, selectedDate: '2012-11-15' };
    }

    render() {
        const formatDate = (date) => {
            var d = new Date(date),
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
                        <header className="text-center mb-6">
                            <h2 className="font-bold text-3xl">Create account</h2>
                            <p>Wow, it's real this is your first time huh</p>
                        </header>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 uppercase font-bold">email address</label>
                            <input type={'email'} className="border border-black p-2 px-4 rounded-lg" required />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 uppercase font-bold">username</label>
                            <input type={'text'} className="border border-black p-2 px-4 rounded-lg" required />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 uppercase font-bold">password</label>
                            <input type={'password'} className="border border-black p-2 px-4 rounded-lg" required />
                        </div>
                        <div className="relative">
                            <label className="mb-2   uppercase font-bold">birthdate</label>
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
                                        this.setState({ date: date, selectedDate: formatDate(date)})
                                    }}
                                    options={{
                                        yearReverse: true,            
                                        monthShort: true,             
                                        monthCaps: true               
                                    }}
                                    classes={{
                                        dateContainer: 'flex justify-between',
                                        monthContainer: 'border border-black p-2 px-4 rounded-lg',
                                        yearContainer: 'classes',
                                        monthContainer: 'classes',
                                        dayContainer: 'classes',
                                        year: 'classes classes',
                                        month: 'classes classes',
                                        day: 'classes classes',
                                        yearOptions: 'classes',
                                        monthOptions: 'classes',
                                        dayOptions: 'classes'
                                    }}
                                />

                            </div>
                        <div className="mb-4">
                            <Link href="/forgotuser" className="text-red-500">
                                Forgot password?
                            </Link>
                        </div>
                        <button className="w-full text-center bg-red-500 p-2 rounded-lg font-bold text-white mb-4">
                            Continue
                        </button>
                        <div id="register-page">
                            <span>
                                Already have account?
                                <Link href="/login" className="text-red-500 ml-1">
                                    Login
                                </Link>
                            </span>
                        </div>
                    </form>
                </main>
            </section>
        )
    }

}