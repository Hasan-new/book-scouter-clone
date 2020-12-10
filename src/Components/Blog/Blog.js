import React from 'react';
import awesomeApp from '../../images/awesomeApps.png';
import pros_cons from '../../images/pros&cons.png';
import provenTips from '../../images/provenTips.png';
import rentTextbooks from '../../images/RentTextbooks.png';
import tipsTransitioning from '../../images/tipsTransitioning.png';
import onlineJobs from '../../images/onlineJobs.png';
import opportunity from '../../images/opportunity.png';
import graduateDegree from '../../images/graduateDegree.png';
import maintain from '../../images/maintain.png';
import './Blog.css';

const Blog = () => {
    return (
        <section >
            <h1 className='text-center'>Blog</h1>
            <div className="blog">
                <div className="mt-3 container">
                    <div className="card  mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-6 col-xs-12 col-sm-12 awesomeImg" >
                                <img src={awesomeApp} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-6 col-xs-12 col-sm-12">
                                <div className="card-body">
                                    <h1 className="card-title">Awesome Apps Every College Students Need</h1>
                                    <h5 className="card-text text-left">Sometimes the difference between success and failure is having the right tools. Luckily for students today there are a ton of great apps that are often free to help them get through a busy semester. Work smarter in college (no way!) with these awesome apps that we picked to assist with everything from notetaking and time-management, to sleep and healthy eating. You should totally check these out…</h5>
                                </div>
                                {/* <div className="date text-right">
                                <h6>{new Date().toTimeString()}</h6>
                            </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card-group">
                            <div className="col-md-4 col-12">
                                <div className="card">
                                    <img className="card-img-top" src={provenTips} alt="Card image cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">8 Proven Tips to Ace College Move-In Day</h3>
                                        <h5 className="card-text">After waiting all summer, your college move-in day is finally arriving! There is a lot of work that goes into moving to a school across the country, across the state, or even across town. Don’t panic, we’ve assembled time-proven recommendations to ensure your dorm move-in goes as smoothly as possible with 8 tips to ace your first day on campus.</h5>
                                        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 mt-2 mt-md-0">
                                <div className="card">
                                    <img className="card-img-top" src={pros_cons} alt="Card image cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">Pros & Cons of eTextbooks</h3>
                                        <h5 className="card-text">Students have many considerations to make when selecting textbooks: new or used, rent or buy, and print or digital eBooks. Quite often the decision comes down to a student’s learning style and their understanding of the limitations of each option. In this blog, we are breaking down the pros and cons of eTextbooks, as well as discussing how students learn from each format.</h5>
                                        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 mt-2 mt-md-0">
                                <div class="card">
                                    <img class="card-img-top" src={rentTextbooks} alt="Card image cap" />
                                    <div class="card-body">
                                        <h3 class="card-title">Buy or Rent Textbooks…or try Digital!</h3>
                                        <h5 class="card-text">Solving the Textbook Dilemma: Buy, Rent, or go Digital? Let’s face it – getting your textbooks for college can get complicated. Should you buy or rent textbooks? Physical or digital books? We’ve done the research to present you with the pros and cons of each solution. BUY Textbooks Pros: You can decide whether to keep</h5>
                                        {/* <p class="card-text"><small class="text-muted">{new Date(2020,3,10).toTimeString()}</small></p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card  my-3">
                        <div className="row no-gutters">
                            <div className="col-md-6 col-xs-12 col-sm-12 awesomeImg" >
                                <img src={tipsTransitioning} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-6 col-xs-12 col-sm-12">
                                <div className="card-body">
                                    <h1 className="card-title">Tips for Transitioning to College During COVID-19</h1>
                                    <h5 className="card-text text-left">College will look very different this fall whether that be in person or online. Schools are hopeful to have students on campus but are also making alternate plans, such as a hybrid of online and in-class, an early or late start, and other creative options.But regardless of how college will look, here are some tips for making transitioning this fall as smooth as possible:</h5>
                                </div>
                                {/* <div className="date text-right">
                                <h6>{new Date().toTimeString()}</h6>
                            </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card-group">
                            <div className="col-md-4 col-12">
                                <div className="card">
                                    <img className="card-img-top" src={onlineJobs} alt="Card image cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">Online Jobs for College Students</h3>
                                        <h5 className="card-text">As a college student finding an online job can be an adjustment, especially if you had an on-campus work-study position or a job that required you to perform your responsibilities in person. As the most technologically connected generation, you have an advantage in securing an online job in this unprecedented season (ahem, COVID-19 pandemic).</h5>
                                        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 mt-2 mt-md-0">
                                <div className="card">
                                    <img className="card-img-top" src={graduateDegree} alt="Card image cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">The First Steps to Getting Your Graduate Degree: Everything You Need to Know From Deciding to Go to Getting In</h3>
                                        <h5 className="card-text">The graduate school application process can be complicated. From deciding whether to go to grad school, to figuring out where to apply and how to prepare a competitive application – it’s a lot to sort out.</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 mt-2 mt-md-0">
                                <div class="card">
                                    <img className="card-img-top" src={opportunity} alt="Card image cap" />
                                    <div className="card-body">
                                        <h3 className="card-title">BookScouter Announcing the Entrepreneurship Accelerator Program</h3>
                                        <h5 className="card-text">This is a project-based learning program where we bring in people to pitch and ultimately implement their growth ideas specific for BookScouter.That simple!Are you interested in participating in an entrepreneurship accelerator program with BookScouter?</h5>
                                        {/* <p class="card-text"><small class="text-muted">{new Date(2020,3,10).toTimeString()}</small></p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card  my-3">
                        <div className="row no-gutters">
                            <div className="col-md-6 col-xs-12 col-sm-12 awesomeImg" >
                                <img src={maintain} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-6 col-xs-12 col-sm-12">
                                <div className="card-body">
                                    <h1 className="card-title">Maintaining Focus Through Finals</h1>
                                    <h5 className="card-text text-left">Finals loom as the one ultimate obstacle to hurdle before a relaxing holiday break. You might already feel that you’ve been preparing for finals the whole semester or alternatively, maybe you feel that you haven’t prepared enough. But no matter how ready you feel, there are several methods to help you stay focused during finals season while remaining collected and enjoying the other fun parts of the holidays.Sound too good to be true? Well, keep reading and see if any of our hacks could transform your hectic finals routine.</h5>
                                </div>
                                {/* <div className="date text-right">
                                <h6>{new Date().toTimeString()}</h6>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Blog;