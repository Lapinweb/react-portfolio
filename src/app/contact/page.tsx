import React from "react";

export default function Contact() {
    return (
        <div className="flex flex-col items-center">
            <div className="mx-3">
                <h1 className="text-center">Contact</h1>
            </div>

            <div
                id="contact"
                className="md:w-3/4 mx-3 my-10 mockup-browser border border-base-content bg-secondary"
            >
                <div className="mockup-browser-toolbar text-secondary-content">
                    <div className="sm:input sm:border sm:border-base-content w-full sm:text-base-content text-right sm:text-left"></div>
                </div>
                <div className="p-4 border-t border-base-content bg-base-100">
                    <h2 className="mt-2">Contact</h2>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Etiam euismod risus vitae turpis vestibulum
                        sagittis. Curabitur nulla neque, interdum nec metus ac,
                        accumsan faucibus mauris. Nullam euismod enim ut dolor
                        pellentesque congue. Praesent tempor purus nec dolor
                        suscipit, eu sollicitudin elit facilisis. Etiam libero
                        orci, malesuada quis sapien non, imperdiet interdum
                        mauris. Vivamus id feugiat mi. Donec pellentesque mauris
                        sed urna cursus maximus. Quisque tincidunt porta nisl,
                        quis tempor arcu tempor sit amet. Proin sagittis, diam
                        in cursus placerat, metus felis lobortis lectus, eu
                        accumsan justo sem nec velit. Donec in sem hendrerit,
                        placerat mi ut, viverra ex. Sed a dolor id nisl lobortis
                        molestie laoreet in eros."
                    </p>
                </div>
            </div>
        </div>
    );
}
