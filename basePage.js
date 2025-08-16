<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HackRowing Teambuildings</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #F0F4F7;
        }
        .chart-container {
            position: relative;
            width: 100%;
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
            height: 300px;
            max-height: 350px;
        }
        @media (min-width: 768px) {
            .chart-container {
                height: 350px;
            }
        }
        .timeline-item {
            position: relative;
            padding-bottom: 2rem;
            padding-left: 2.5rem;
        }
        .timeline-item:last-child {
            padding-bottom: 0;
        }
        .timeline-marker {
            position: absolute;
            left: 0;
            top: 0;
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: #FFFFFF;
        }
        .timeline-line {
            position: absolute;
            left: 0.6875rem;
            top: 1.5rem;
            bottom: 0;
            width: 2px;
        }
    </style>
</head>
<body class="text-[#343A40]">

    <div class="container mx-auto p-4 md:p-8 max-w-6xl">

        <header class="text-center mb-12 md:mb-16">
            <div class="flex flex-col items-center justify-center space-y-4">
                <img src="6g48r5kJ.jpg" alt="NSA Rowing Club Logo" class="h-16 max-w-full h-auto">
                <h1 class="text-4xl md:text-6xl font-black text-[#283964]">HackRowing Teambuildings</h1>
            </div>
        </header>

        <main>
            <section id="mission" class="mb-12 md:mb-16">
                <div class="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 class="text-2xl md:text-3xl font-bold text-center text-[#283964] mb-4">Our Mission</h2>
                    <p class="text-base md:text-lg text-center max-w-3xl mx-auto">
                        HackRowing was founded on the principle that the discipline, persistence, and collaborative effort inherent in the sport of rowing are directly transferable and highly beneficial to professional endeavors. We offer a distinctive team-building experience on Pancharevo Lake, where participants learn that optimal performance is achieved not through individual strength, but through the perfect synchronicity and unified effort of a cohesive team.
                    </p>
                </div>
            </section>

            <section id="objectives" class="mb-12 md:mb-16">
                 <div class="text-center mb-8">
                    <h2 class="text-2xl md:text-3xl font-bold text-[#283964] mb-2">Program Objectives</h2>
                    <p class="text-base md:text-lg max-w-3xl mx-auto">The program is designed to achieve three key outcomes, creating a lasting impact on team dynamics, community, and personal growth.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <img src="https://placehold.co/400x300/64c4ea/283964?text=Team+Rowing" alt="An image related to team rowing" class="w-full h-auto rounded-lg">
                    </div>
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="w-4 h-4 rounded-full mt-1.5 mr-4" style="background-color: #283964;"></div>
                            <div>
                                <h3 class="font-bold text-lg">Enhance Team Cohesion</h3>
                                <p>Provide a dynamic platform for employees to build stronger connections while promoting an active lifestyle.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="w-4 h-4 rounded-full mt-1.5 mr-4" style="background-color: #64c4ea;"></div>
                            <div>
                                <h3 class="font-bold text-lg">Promote Rowing in Bulgaria</h3>
                                <p>Increase the accessibility of the sport, encouraging broader participation among the public and youth.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                             <div class="w-4 h-4 rounded-full mt-1.5 mr-4" style="background-color: #CCCCCC;"></div>
                            <div>
                                <h3 class="font-bold text-lg">Support Community Development</h3>
                                <p>All proceeds are reinvested into the NSA Rowing Club to improve facilities and support future athletes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="details" class="mb-12 md:mb-16">
                <div class="text-center mb-8">
                    <h2 class="text-2xl md:text-3xl font-bold text-[#283964] mb-2">Key Program Details</h2>
                     <p class="text-base md:text-lg max-w-3xl mx-auto">Our flagship program is structured to provide a comprehensive and impactful experience.</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <p class="text-5xl font-black text-[#64c4ea]">~6</p>
                        <p class="font-bold mt-2">Total Sessions</p>
                    </div>
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <p class="text-5xl font-black text-[#64c4ea]">~1.5</p>
                        <p class="font-bold mt-2">Months Duration</p>
                    </div>
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <p class="text-5xl font-black text-[#64c4ea]">~1.5</p>
                        <p class="font-bold mt-2">Hours Per Session</p>
                    </div>
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <p class="text-5xl font-black text-[#64c4ea]">5-15</p>
                        <p class="font-bold mt-2">Participants Per Group</p>
                    </div>
                </div>
                <p class="text-sm mt-4 text-center italic text-gray-500">*P.S. This is our proposal that we have already tested and works very well, but we are flexible and open to your company's specific needs. We will gladly adapt the program format to your requests.</p>
            </section>

            <section id="structure" class="mb-12 md:mb-16">
                 <div class="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 class="text-2xl md:text-3xl font-bold text-center text-[#283964] mb-8">Program Structure: A 6-Session Journey</h2>
                    <div class="relative max-w-2xl mx-auto">
                        <div class="timeline-item">
                            <div class="timeline-marker bg-[#283964]">1</div>
                            <div class="timeline-line bg-[#283964]"></div>
                            <h3 class="font-bold text-lg">Theoretical Session</h3>
                            <p>An on-land introduction to rowing technique using Concept 2 ergometers.</p>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-marker bg-[#64c4ea]">2</div>
                            <div class="timeline-line bg-[#64c4ea]"></div>
                            <h3 class="font-bold text-lg">Practical Training Begins</h3>
                            <p>Four hands-on sessions in various boat classes, from eights to doubles.</p>
                        </div>
                         <div class="timeline-item">
                            <div class="timeline-marker bg-[#64c4ea]">3</div>
                            <div class="timeline-line bg-[#64c4ea]"></div>
                            <h3 class="font-bold text-lg">Developing Synchronicity</h3>
                            <p>Continued on-water practice focusing on team coordination.</p>
                        </div>
                         <div class="timeline-item">
                            <div class="timeline-marker bg-[#64c4ea]">4</div>
                            <div class="timeline-line bg-[#64c4ea]"></div>
                            <h3 class="font-bold text-lg">Refining Technique</h3>
                            <p>Advanced coaching to improve crew efficiency and power.</p>
                        </div>
                         <div class="timeline-item">
                            <div class="timeline-marker bg-[#64c4ea]">5</div>
                            <div class="timeline-line bg-[#CCCCCC]"></div>
                            <h3 class="font-bold text-lg">Final Practice & Race Prep</h3>
                            <p>Crews prepare for the final event, solidifying their teamwork.</p>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-marker bg-[#CCCCCC]">6</div>
                            <h3 class="font-bold text-lg">Final Race & Ceremony</h3>
                            <p>Friendly races between crews, followed by a closing ceremony with certificates.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="text-center pt-8 mt-12 md:mt-16">
            <h2 class="text-2xl md:text-3xl font-bold text-[#283964] mb-2">Connect with HackRowing</h2>
            <p class="text-base md:text-lg max-w-3xl mx-auto">Find us on social media or visit our location to get started.</p>
            <div class="flex justify-center space-x-6 mt-4">
                 <a href="https://www.instagram.com/nsa_rowingclub/" class="text-[#283964] hover:text-[#64c4ea] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                 </a>
                 <a href="https://www.facebook.com/profile.php?id=100064068644104" class="text-[#283964] hover:text-[#64c4ea] transition-colors">
                     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                 </a>
                 <a href="https://maps.app.goo.gl/WDdjWr6BggPAQNgo9" class="text-[#283964] hover:text-[#64c4ea] transition-colors">
                     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                 </a>
            </div>
             <div class="mt-8">
                <h3 class="font-bold text-xl mb-4 text-[#283964]">Our Location</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.558888726125!2d23.407010512273853!3d42.597122371051604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa81000645b8db%3A0x6c706332430c134b!2sRowing%20club%20NSA!5e1!3m2!11sen!2snl!4v1754255002371!5m2!1sen!2snl" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded-lg shadow-md max-w-full"></iframe>
            </div>
        </footer>

    </div>
</body>
</html>
