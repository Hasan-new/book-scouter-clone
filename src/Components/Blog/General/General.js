import React from 'react';
import { useHistory } from 'react-router-dom';
import holidayGift from '../../../images/holidayGift.png'
import cookin from '../../../images/whatsCookin.png'
import spooky from '../../../images/spookyBooks.png'
import fiveIdeas from '../../../images/fiveIdeas.png'
import commonMistake from '../../../images/commonMistake.png'
import provenTips from '../../../images/provenTips.png'
import summerRead from '../../../images/summerRead.png'
import tipsTransitioning from '../../../images/tipsTransitioning.png'
import makeMoney from '../../../images/makeMoney.png'
import bestResourses from '../../../images/bestResourses.png'
import adjustClass from '../../../images/adjustClass.png'
import onlineJobs from '../../../images/onlineJobs.png'
import './General.css'

const General = () => {

    let history = useHistory();

    const handleCollege = () => {
        history.push('/blog');
    }

    const handleGeneral = () => {
        history.push('/general');
    }

    const handleVendor = () =>{
        history.push('/vendor')
    }

    return (
        <section className='my-3'>
            <h1 className='text-center'>Blog</h1>
            <div className="general mt-5">
                <div className="container text-center">
                    <div>
                        <h4 className='text-center'>EXPLORE MORE TIPS</h4>
                        <button onClick={handleCollege} type="button" class="btn btn-info">College</button>
                        <button onClick={handleGeneral} type="button" class="btn btn-info mx-3">General</button>
                        <button onClick={handleVendor} type="button" class="btn btn-info">Vendors</button>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="card  mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-6 col-xs-12 col-sm-12 awesomeImg" >
                                <img src={holidayGift} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-6 col-xs-12 col-sm-12">
                                <div className="card-body">
                                    <h2 className="card-title">Holiday Gift Guide: Books and Other Gifts for Book Lovers</h2>
                                    <h5 className="card-text text-left">It’s that time of year when your thoughts turn to finding that special holiday gift for friends and family who are book lovers. But what should be a fun, festive task can quickly become overwhelming. We’ve done some of the leg work for you compiling a collection of unique, niche book selections and other gifts reading fans will appreciate. And don’t forget the BEST way to be sure you are getting the lowest prices on books is to use the handy search tools on Bookscouter.com –we do all the work of searching for you!</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="card-group">
                            <div className="col-md-4 col-12">
                                <div className="card">
                                    <img className="card-img-top" src={cookin} alt="Card image cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">What’s Cookin’? Cookbook Values Can Heat Up</h3>
                                        <h5 className="card-text">It’s the time of year for a lot of holiday cooking and baking. As you dust off an old cookbook and consider letting it go to make extra space, you might want to first check BookScouter.com to see the current value. If it’s really old, you may want to have it appraised by an antique book dealer.</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 mt-2 mt-md-0">
                                <div className="card">
                                    <img className="card-img-top" src={spooky} alt="Card image cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">Find Spooky Books for a Ghoul’d Price</h3>
                                        <h5 className="card-text">It’s that time of year when you begin to feel a chill in the air, the dark nights start to get longer and you yearn to curl up with a suspenseful tale. We get your October mood and have compiled some Spooky reading suggestions–with links to finding a GHOUL’D, no, the BEST prices online using BookScouter. No need to get scared–our pricing tool does all the price searching for you.</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 mt-2 mt-md-0">
                                <div class="card">
                                    <img class="card-img-top" src={fiveIdeas} alt="Card image cap" />
                                    <div class="card-body">
                                        <h3 class="card-title">Five Ideas to Find Your Next Great Read</h3>
                                        <h5 class="card-text">BookRiot is another great spot to find book recommendations. They are the largest independent editorial site in the U.S. and focus on covering a wide range for diverse readers. They have podcasts, blogs, or you can sign-up for more personalized recommendations and exclusive content.</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card  mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-6 col-xs-12 col-sm-12 awesomeImg" >
                                <img src={commonMistake} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-6 col-xs-12 col-sm-12">
                                <div className="card-body">
                                    <h2 className="card-title">Common Mistakes Students Make With Money</h2>
                                    <h5 className="card-text text-left">Start by determining a budget. Items to include in your budget: any monthly bills, expenses like groceries, miscellaneous charges, and a fund to cover unexpected expenses. Know how much ‘fun money’ you can spend each month and when it’s gone, stop spending! It may sound simple but you need to have a handle on your income and be able to distinguish needs from wants.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="card-group">
                            <div className="col-md-4 col-12">
                                <div className="card">
                                    <img className="card-img-top" src={provenTips} alt="Card image cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">8 Proven Tips to Ace College Move-In Day</h3>
                                        <h5 className="card-text">After waiting all summer, your college move-in day is finally arriving! There is a lot of work that goes into moving to a school across the country, across the state, or even across town. Don’t panic, we’ve assembled time-proven recommendations to ensure your dorm move-in goes as smoothly as possible with 8 tips to ace your first day on campus.</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 mt-2 mt-md-0">
                                <div className="card">
                                    <img className="card-img-top" src={summerRead} alt="Card image cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">Find Your Next Summer Read</h3>
                                        <h5 className="card-text">Find Your Next Summer Read Summer is officially here and though it might look different in 2020, that only emphasizes why you deserve an escape into a great book. Are you ready to dive into an engaging read, but need some direction? Look no further!  We have compiled six ideas to help yoy.</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 mt-2 mt-md-0">
                                <div class="card">
                                    <img class="card-img-top" src={tipsTransitioning} alt="Card image cap" />
                                    <div class="card-body">
                                        <h3 class="card-title">Tips for Transitioning to College During COVID-19</h3>
                                        <h5 class="card-text">Tips for Transitioning to College During COVID-19 College will look very different this fall whether that be in person or online. Schools are hopeful to have students on campus but are also making alternate plans, such as a hybrid of online and in-class, an early or late start, and other creative options. But regardless of […]</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card  mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-6 col-xs-12 col-sm-12 awesomeImg" >
                                <img src={makeMoney} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-6 col-xs-12 col-sm-12">
                                <div className="card-body">
                                    <h2 className="card-title">How to Make Money Flipping Books</h2>
                                    <h5 className="card-text text-left mt-1">We talk a lot about how easy it is to make money flipping books. Today we’re going to show you how to do just that.  Here are the 9 steps to Making Money Flipping Books  1. Begin with an inventory. You can begin with just one book. Maybe it’s a book you used for school.You can begin with just one book. Maybe it’s a book you used for school or one you found at a thrift store. Don’t feel intimidated by the future of your bookselling business when you begin. </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="card-group">
                            <div className="col-md-4 col-12">
                                <div className="card">
                                    <img className="card-img-top" src={bestResourses} alt="Card image cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">Best Resources for Reselling Books</h3>
                                        <h5 className="card-text">Reselling books can be a very lucrative business or side-hustle! As with every business, great tools and resources can help make the business of reselling books sustainable. Here are the best resources to help you make the most money reselling books: Resources for Finding Books Finding books that you can resell for profit is the […]</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 mt-2 mt-md-0">
                                <div className="card">
                                    <img className="card-img-top" src={onlineJobs} alt="Card image cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">Online Jobs for College Students</h3>
                                        <h5 className="card-text">As a college student finding an online job can be an adjustment, especially if you had an on-campus work-study position or a job that required you to perform your responsibilities in person. As the most technologically connected generation, you have an advantage in securing an online job in this unprecedented season (ahem, COVID-19 pandemic).</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 mt-2 mt-md-0">
                                <div className="card">
                                    <img className="card-img-top" style={{height: '180px'}} src={adjustClass}  alt="Card image cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">How to Adjust to Online Classes Because of COVID-19</h3>
                                        <h5 className="card-text">With a global pandemic on the rise, many colleges and universities have chosen to move towards online classes for the remainder of the 2019-2020 school year. As of March 11, 2020, at least 135 US colleges and universities have moved from in-person to online studies for the remainder of the school year according to THIS […],</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default General;