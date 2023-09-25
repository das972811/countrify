export const getAllCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();
    
    return countries;
}

export const getCountry = async (name: string | string[]) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
    const country = await response.json();

    return country;
}