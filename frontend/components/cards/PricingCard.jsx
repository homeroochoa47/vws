import { useEffect } from 'react'
import {
    Tab,
    initTE,
  } from "tw-elements";

export default function FaqCard() {
    useEffect(() => {
        initTE({ Tab });
}, []);

    return (
        <div id="Tabs">
            {/* Content */}
            <ul
            className="flex list-none flex-col md:flex-row border-b-0 pl-0 bg-darkest-blue rounded-xl"
            role="tablist"
            data-te-nav-ref>

                <li role="presentation" className="flex-auto text-center px-1">
                    <a
                        href="#tabs-home01"
                        className="my-1 block px-7 py-3 text-xl font-normal lg:font-medium font-frank leading-tight text-off-white hover:isolate hover:bg-light-blue transition duration-[350ms] ease-in-out focus:border-transparent data-[te-nav-active]:bg-red rounded-xl"
                        data-te-toggle="pill"
                        data-te-target="#tabs-home01"
                        data-te-nav-active
                        role="tab"
                        aria-controls="tabs-home01"
                        aria-selected="true">
                        Essential</a>
                    </li>

                <li role="presentation" className="flex-auto text-center px-1">
                    <a
                    href="#tabs-profile01"
                    className="focus:border-transparen my-1 block px-7 py-3 text-xl font-normal lg:font-medium font-frank leading-tight text-off-white hover:isolate hover:bg-light-blue transition duration-[350ms] ease-in-out data-[te-nav-active]:bg-red rounded-xl"
                    data-te-toggle="pill"
                    data-te-target="#tabs-profile01"
                    role="tab"
                    aria-controls="tabs-profile01"
                    aria-selected="false"
                    >Insight</a>
                </li>
                <li role="presentation" className="flex-auto text-center px-1">
                    <a
                    href="#tabs-messages01"
                    className="my-1 block px-7 py-3 text-xl font-normal lg:font-medium font-frank leading-tight text-off-white hover:isolate hover:bg-light-blue transition duration-[350ms] ease-in-out focus:border-transparent data-[te-nav-active]:bg-red rounded-xl"
                    data-te-toggle="pill"
                    data-te-target="#tabs-messages01"
                    role="tab"
                    aria-controls="tabs-messages01"
                    aria-selected="false"
                    >Breakthrough</a>
                </li>
            </ul>   

            {/* Content */}
            <div className="mb-6 text-left">
                <div
                className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-home01"
                role="tabpanel"
                aria-labelledby="tabs-home-tab01"
                data-te-tab-active>
                    <div id="card-feature" className='flex flex-col px-1 pt-2'>
                        <h5 className='font-frank text-off-white font-bold text-2xl lg:text-3xl 2xl:text-4xl'>5 Standard Pages</h5>
                        <p className='border-b-2 border-yellow font-martel text-off-white/90 lg:text-lg leading-tight 2xl:leading-none 2xl:text-xl mt-auto pb-1'>Typically consists of: <br></br>
                            Home | About | Services | Providers | Contact
                        </p>
                    </div>

                    <div id="card-feature" className='flex flex-col px-1 pt-4'>
                        <h5 className='font-frank text-off-white font-bold text-2xl lg:text-3xl 2xl:text-4xl'>Tailored Site Design</h5>
                        <p className='border-b-2 border-yellow font-martel text-off-white/90 lg:text-lg leading-tight 2xl:leading-none 2xl:text-xl mt-auto pb-1'>You’ll get a tailored design that showcases who you are, what you do, why you do it and more. Based on your branding and personality.</p>
                    </div>

                    <div id="card-feature" className='flex flex-col px-1 pt-4'>
                        <h5 className='font-frank text-off-white font-bold text-2xl lg:text-3xl 2xl:text-4xl'>Collaborative Content Writing</h5>
                        <p className='border-b-2 border-yellow font-martel text-off-white/90 lg:text-lg leading-tight 2xl:leading-none 2xl:text-xl mt-auto pb-1'>We’ll work together to create written content that authentically reflects you, your practice, values and everything in between.</p>
                    </div>

                    <div id="card-feature" className='flex flex-col px-1 pt-4'>
                        <h5 className='font-frank text-off-white font-bold text-2xl lg:text-3xl 2xl:text-4xl'>Hosting</h5>
                        <p className='border-b-2 border-yellow font-martel text-off-white/90 lg:text-lg leading-tight 2xl:leading-none 2xl:text-xl mt-auto pb-1'>Your site will be hosted online 24/7, without having to worry about dealing with hosting providers.</p>
                    </div>

                    <div id="card-feature" className='flex flex-col px-1 pt-4'>
                        <h5 className='font-frank text-off-white font-bold text-2xl lg:text-3xl 2xl:text-4xl'>Site Management</h5>
                        <p className='border-b-2 border-yellow font-martel text-off-white/90 lg:text-lg leading-tight 2xl:leading-none 2xl:text-xl mt-auto pb-1'>Meaning that if your needs change, so can your site. We’ll make sure that your site stays up to date to reflect the latest information about your practice</p>
                    </div>

                </div>

                <div
                className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-profile01"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab01">
                    <div id="card-feature" className='flex flex-col px-1 pt-2'>
                        <h5 className='font-frank text-off-white font-bold text-2xl lg:text-3xl 2xl:text-4xl italic border-b-2 border-yellow'>The Essential Package, Plus</h5>
                    </div>

                    <div id="card-feature" className='flex flex-col px-1 pt-4'>
                        <h5 className='font-frank text-off-white font-bold text-2xl lg:text-3xl 2xl:text-4xl'>1 Dynamic Page Template</h5>
                        <p className='border-b-2 border-yellow font-martel text-off-white/90 lg:text-lg leading-tight 2xl:leading-none 2xl:text-xl mt-auto pb-1'>Dynamic pages, or 'subpages' are pages that can be reused with dynamic content, meaning you can include more in-depth information. A great example of this is a Blog with multiple posts.</p>
                    </div>

                    <div id="card-feature" className='flex flex-col px-1 pt-4'>
                        <h5 className='font-frank text-off-white font-bold text-2xl lg:text-3xl 2xl:text-4xl'>1 Additional Standard Page</h5>
                        <p className='border-b-2 border-yellow font-martel text-off-white/90 lg:text-lg leading-tight 2xl:leading-none 2xl:text-xl mt-auto pb-1'>Add an extra standard page to your site to highlight more of your practice's offerings</p>
                    </div>


                    <div id="card-feature" className='flex flex-col px-1 pt-4'>
                        <h5 className='font-frank text-off-white font-bold text-2xl lg:text-3xl 2xl:text-4xl'>Advanced SEO</h5>
                        <p className='border-b-2 border-yellow font-martel text-off-white/90 lg:text-lg leading-tight 2xl:leading-none 2xl:text-xl mt-auto pb-1'>Including a custom designed flier and captions that appear on social media advertisements, text message previews, and more.</p>
                    </div>

                    <div id="card-feature" className='flex flex-col px-1 pt-4'>
                        <h5 className='font-frank text-off-white font-bold text-2xl lg:text-3xl 2xl:text-4xl'>Scheduling Service Inegration</h5>
                        <p className='border-b-2 border-yellow font-martel text-off-white/90 lg:text-lg leading-tight 2xl:leading-none 2xl:text-xl mt-auto pb-1'>Link scheduling or client booking software to allow for bookings directly on your site without having external links. <br />*Only applicable with compatible services</p>
                    </div>
                </div>

                <div
                className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-messages01"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab01">
                    <div id="card-feature" className='flex flex-col px-1 pt-2'>
                        <h5 className='font-frank text-off-white font-bold text-2xl lg:text-3xl 2xl:text-4xl italic border-b-2 border-yellow'>The Insight Package, Plus</h5>
                    </div>

                    <div id="card-feature" className='flex flex-col px-1 pt-4'>
                        <h5 className='font-frank text-off-white font-bold text-2xl lg:text-3xl 2xl:text-4xl'>1 Additional Dynamic Page</h5>
                        <p className='border-b-2 border-yellow font-martel text-off-white/90 lg:text-lg leading-tight 2xl:leading-none 2xl:text-xl mt-auto pb-1'>Add another dynamic page to your site to dive even further to subjects of your choosing.</p>
                    </div>

                    <div id="card-feature" className='flex flex-col px-1 pt-4'>
                        <h5 className='font-frank text-off-white font-bold text-2xl lg:text-3xl 2xl:text-4xl'>Newsletter Setup</h5>
                        <p className='border-b-2 border-yellow font-martel text-off-white/90 lg:text-lg leading-tight 2xl:leading-none 2xl:text-xl mt-auto pb-1'>Keep in touch with clients visiting your site. I'll link a form with your preffered email marketing service to accept new signup entires to your newsletter</p>
                    </div>

                    <div id="card-feature" className='flex flex-col px-1 pt-4'>
                        <h5 className='font-frank text-off-white font-bold text-2xl lg:text-3xl 2xl:text-4xl'>Advanced Animations</h5>
                        <p className='border-b-2 border-yellow font-martel text-off-white/90 lg:text-lg leading-tight 2xl:leading-none 2xl:text-xl mt-auto pb-1'>Give your site extra flair with advanced animations to grab your users’ attention.</p>
                    </div>

                    <div id="card-feature" className='flex flex-col px-1 pt-4'>
                        <h5 className='font-frank text-off-white font-bold text-2xl lg:text-3xl 2xl:text-4xl'>Analytics Reports</h5>
                        <p className='border-b-2 border-yellow font-martel text-off-white/90 lg:text-lg leading-tight 2xl:leading-none 2xl:text-xl mt-auto pb-1'>Keep track of what users on your site are most interested with monthly analytics reports.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}