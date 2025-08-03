<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HackRowing: A Team-Building Initiative</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #F8F9FA;
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
            <h1 class="text-4xl md:text-6xl font-black text-[#FF4E50] mb-2">HackRowing</h1>
            <p class="text-xl md:text-2xl font-bold text-[#FC913A]">A Unique Team-Building Initiative</p>
        </header>

        <main>
            <section id="mission" class="mb-12 md:mb-16">
                <div class="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 class="text-2xl md:text-3xl font-bold text-center text-[#FF4E50] mb-4">Our Mission</h2>
                    <p class="text-base md:text-lg text-center max-w-3xl mx-auto">
                        HackRowing was founded on the principle that the discipline, persistence, and collaborative effort inherent in the sport of rowing are directly transferable and highly beneficial to professional endeavors. We offer a distinctive team-building experience on Pancharevo Lake, where participants learn that optimal performance is achieved not through individual strength, but through the perfect synchronicity and unified effort of a cohesive team.
                    </p>
                </div>
            </section>

            <section id="objectives" class="mb-12 md:mb-16">
                 <div class="text-center mb-8">
                    <h2 class="text-2xl md:text-3xl font-bold text-[#FF4E50] mb-2">Program Objectives</h2>
                    <p class="text-base md:text-lg max-w-3xl mx-auto">The program is designed to achieve three key outcomes, creating a lasting impact on team dynamics, community, and personal growth.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="chart-container">
                            <canvas id="objectivesChart"></canvas>
                        </div>
                    </div>
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="w-4 h-4 rounded-full mt-1.5 mr-4" style="background-color: #FF4E50;"></div>
                            <div>
                                <h3 class="font-bold text-lg">Enhance Team Cohesion</h3>
                                <p>Provide a dynamic platform for employees to build stronger connections while promoting an active lifestyle.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="w-4 h-4 rounded-full mt-1.5 mr-4" style="background-color: #FC913A;"></div>
                            <div>
                                <h3 class="font-bold text-lg">Promote Rowing in Bulgaria</h3>
                                <p>Increase the accessibility of the sport, encouraging broader participation among the public and youth.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                             <div class="w-4 h-4 rounded-full mt-1.5 mr-4" style="background-color: #F9D423;"></div>
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
                    <h2 class="text-2xl md:text-3xl font-bold text-[#FF4E50] mb-2">Key Program Details</h2>
                     <p class="text-base md:text-lg max-w-3xl mx-auto">Our flagship program is structured to provide a comprehensive and impactful experience.</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <p class="text-5xl font-black text-[#FC913A]">6</p>
                        <p class="font-bold mt-2">Total Sessions</p>
                    </div>
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <p class="text-5xl font-black text-[#FC913A]">1.5</p>
                        <p class="font-bold mt-2">Months Duration</p>
                    </div>
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <p class="text-5xl font-black text-[#FC913A]">1.5</p>
                        <p class="font-bold mt-2">Hours Per Session</p>
                    </div>
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <p class="text-5xl font-black text-[#FC913A]">5-15</p>
                        <p class="font-bold mt-2">Participants Per Group</p>
                    </div>
                </div>
            </section>

            <section id="structure" class="mb-12 md:mb-16">
                 <div class="bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 class="text-2xl md:text-3xl font-bold text-center text-[#FF4E50] mb-8">Program Structure: A 6-Session Journey</h2>
                    <div class="relative max-w-2xl mx-auto">
                        <div class="timeline-item">
                            <div class="timeline-marker bg-[#FF4E50]">1</div>
                            <div class="timeline-line bg-[#FF4E50]"></div>
                            <h3 class="font-bold text-lg">Theoretical Session</h3>
                            <p>An on-land introduction to rowing technique using Concept 2 ergometers.</p>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-marker bg-[#FC913A]">2</div>
                            <div class="timeline-line bg-[#FC913A]"></div>
                            <h3 class="font-bold text-lg">Practical Training Begins</h3>
                            <p>Four hands-on sessions in various boat classes, from eights to doubles.</p>
                        </div>
                         <div class="timeline-item">
                            <div class="timeline-marker bg-[#FC913A]">3</div>
                            <div class="timeline-line bg-[#FC913A]"></div>
                            <h3 class="font-bold text-lg">Developing Synchronicity</h3>
                            <p>Continued on-water practice focusing on team coordination.</p>
                        </div>
                         <div class="timeline-item">
                            <div class="timeline-marker bg-[#FC913A]">4</div>
                            <div class="timeline-line bg-[#FC913A]"></div>
                            <h3 class="font-bold text-lg">Refining Technique</h3>
                            <p>Advanced coaching to improve crew efficiency and power.</p>
                        </div>
                         <div class="timeline-item">
                            <div class="timeline-marker bg-[#FC913A]">5</div>
                            <div class="timeline-line bg-[#F9D423]"></div>
                            <h3 class="font-bold text-lg">Final Practice & Race Prep</h3>
                            <p>Crews prepare for the final event, solidifying their teamwork.</p>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-marker bg-[#F9D423]">6</div>
                            <h3 class="font-bold text-lg">Final Race & Ceremony</h3>
                            <p>Friendly races between crews, followed by a closing ceremony with certificates.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="text-center border-t pt-8 mt-12 md:mt-16">
            <p class="font-bold text-lg text-[#FF4E50]">Connect with HackRowing</p>
            <div class="flex justify-center space-x-6 mt-4">
                 <a href="#" class="text-[#FC913A] hover:text-[#FF4E50] transition-colors">Instagram</a>
                 <a href="#" class="text-[#FC913A] hover:text-[#FF4E50] transition-colors">Facebook</a>
                 <a href="#" class="text-[#FC913A] hover:text-[#FF4E50] transition-colors">Google Maps</a>
            </div>
        </footer>

    </div>

    <script>
        function wrapText(str, maxWidth) {
            if (str.length <= maxWidth) {
                return str;
            }
            const words = str.split(' ');
            const lines = [];
            let currentLine = '';
            words.forEach(word => {
                if ((currentLine + ' ' + word).trim().length > maxWidth) {
                    lines.push(currentLine.trim());
                    currentLine = word;
                } else {
                    currentLine = (currentLine + ' ' + word).trim();
                }
            });
            if (currentLine) {
                lines.push(currentLine.trim());
            }
            return lines;
        }

        const objectivesCtx = document.getElementById('objectivesChart').getContext('2d');
        const originalLabels = ['Enhance Team Cohesion', 'Promote Rowing in Bulgaria', 'Support Community Development'];
        const processedLabels = originalLabels.map(label => wrapText(label, 16));

        new Chart(objectivesCtx, {
            type: 'doughnut',
            data: {
                labels: processedLabels,
                datasets: [{
                    label: 'Program Objectives',
                    data: [34, 33, 33],
                    backgroundColor: [
                        '#FF4E50',
                        '#FC913A',
                        '#F9D423'
                    ],
                    borderColor: '#FFFFFF',
                    borderWidth: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            title: function(tooltipItems) {
                                const item = tooltipItems[0];
                                let label = item.chart.data.labels[item.dataIndex];
                                if (Array.isArray(label)) {
                                  return label.join(' ');
                                } else {
                                  return label;
                                }
                            },
                            label: function(context) {
                                return '';
                            }
                        }
                    }
                }
            }
        });
    </script>

</body>
</html>
