/* eslint-disable react/prop-types */

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-9/12 md:w-4/12 mx-auto text-center mb-14 mt-10 md:mt-24">
            <h1 className="text-yellow-600 md:text-xl mb-3">---{subHeading}---</h1>
            <h2 className="text-3xl md:text-5xl uppercase border-y-2 py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;