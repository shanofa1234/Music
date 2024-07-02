import React from 'react';

function ArticlesAndVideosPage() {
    return (
        <main className="container mx-auto my-8 p-4 bg-white shadow-md rounded-lg">
            <section>
                <h2 className="text-2xl font-semibold mb-4">Articles</h2>
                <div className="space-y-4">
                    <article className="p-4 border rounded-md shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold">Understanding Anxiety</h3>
                        <p className="mt-2 text-gray-700">Anxiety is a normal and often healthy emotion. However, when a person regularly feels disproportionate levels of anxiety, it might become a medical disorder.</p>
                        <a href="https://newsinhealth.nih.gov/2016/03/understanding-anxiety-disorders" className="text-blue-600 hover:underline mt-2 inline-block">Read more</a>
                    </article>
                    <article className="p-4 border rounded-md shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold">Coping with Depression</h3>
                        <p className="mt-2 text-gray-700">Depression is a common and serious medical illness that negatively affects how you feel, the way you think and how you act.</p>
                        <a href="https://www.helpguide.org/articles/depression/coping-with-depression.htm" className="text-blue-600 hover:underline mt-2 inline-block">Read more</a>
                    </article>
                    <article className="p-4 border rounded-md shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold">Managing Stress</h3>
                        <p className="mt-2 text-gray-700">Stress is a common experience, but managing it effectively is crucial for maintaining mental health and well-being.</p>
                        <a href="https://www.helpguide.org/articles/stress/stress-management.htm" className="text-blue-600 hover:underline mt-2 inline-block">Read more</a>
                    </article>
                    <article className="p-4 border rounded-md shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold">Building Resilience</h3>
                        <p className="mt-2 text-gray-700">Resilience helps you adapt to life's challenges and bounce back from adversity. Learn how to build and maintain resilience.</p>
                        <a href="https://health.cornell.edu/resources/health-topics/building-resilience#:~:text=Cultivating%20social%20connections%20%E2%80%93%20and%20avoiding,performance%20and%20emotional%20well%2Dbeing." className="text-blue-600 hover:underline mt-2 inline-block">Read more</a>
                    </article>
                </div>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Videos</h2>
                <div className="flex flex-wrap -mx-2">
                    <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
                        <div className="p-4 border rounded-md shadow-lg hover:shadow-xl transition-shadow bg-green-50">
                            <h3 className="text-xl font-semibold">Understanding Mental Health</h3>
                            <p className="mt-2 text-gray-700">Learn the basics of mental health and why it's important.</p>
                            <div className="mt-4">
                                <a href="https://youtu.be/BpzVvUGfJeA" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.youtube.com/vi/BpzVvUGfJeA/hqdefault.jpg" alt="Understanding Mental Health" className="w-full h-32 object-cover rounded-md" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
                        <div className="p-4 border rounded-md shadow-lg hover:shadow-xl transition-shadow bg-green-50">
                            <h3 className="text-xl font-semibold">Managing Stress and Anxiety</h3>
                            <p className="mt-2 text-gray-700">This video provides practical tips for managing stress and anxiety.</p>
                            <div className="mt-4">
                                <a href="https://youtu.be/gWs-AswW398" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.youtube.com/vi/gWs-AswW398/hqdefault.jpg" alt="Managing Stress and Anxiety" className="w-full h-32 object-cover rounded-md" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
                        <div className="p-4 border rounded-md shadow-lg hover:shadow-xl transition-shadow bg-green-50">
                            <h3 className="text-xl font-semibold">Coping with Depression</h3>
                            <p className="mt-2 text-gray-700">This video explains the symptoms of depression and offers coping strategies.</p>
                            <div className="mt-4">
                                <a href="https://youtu.be/G0zJGDokyWQ" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.youtube.com/vi/G0zJGDokyWQ/hqdefault.jpg" alt="Coping with Depression" className="w-full h-32 object-cover rounded-md" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
                        <div className="p-4 border rounded-md shadow-lg hover:shadow-xl transition-shadow bg-green-50">
                            <h3 className="text-xl font-semibold">Building Resilience</h3>
                            <p className="mt-2 text-gray-700">Learn how to build resilience and handle life's challenges effectively.</p>
                            <div className="mt-4">
                                <a href="https://youtu.be/1FDyiUEn8Vw" target="_blank" rel="noopener noreferrer">
                                    <img src="https://img.youtube.com/vi/1FDyiUEn8Vw/hqdefault.jpg" alt="Building Resilience" className="w-full h-32 object-cover rounded-md" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 w-full sm:w-1/2 lg:w-1/3">
                        <div className="p-4 border rounded-md shadow-lg hover:shadow-xl transition-shadow bg-green-50">
                            <h3 className="text-xl font-semibold">Mental Health and Well-being</h3>
                            <p className="mt-2 text-gray-700">This video covers various aspects of mental health and well-being.</p>
                            <div className="mt-4">
                                <a href="https://youtu.be/wr4N-SdekqY" target="_blank" rel="noopener noreferrer">
                                    <img src="https://i.ytimg.com/an_webp/wr4N-SdekqY/mqdefault_6s.webp?du=3000&sqp=CLiE97IG&rs=AOn4CLB5odAhXS0rnJqI4sYrv1Oc1ydBaA" alt="Mental Health and Well-being" className="w-full h-32 object-cover rounded-md" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Add more videos as needed */}
                </div>
            </section>
        </main>
    );
}

export default ArticlesAndVideosPage;
