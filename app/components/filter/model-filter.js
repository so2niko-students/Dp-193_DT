export default class ModelFilter{
    data = [];

    filterParams = {
        all         : _ => true,
        young       : age => age >= 18 && age <= 44,
        average     : age => age >= 45 && age <= 59,
        older       : age => age >= 60 && age <= 74,
        senile      : age => age >= 75 && age < 90,
        longevity   : age => age >= 90
    };

    filter(filterBy){
        return this.data.filter(user => this.filterParams[filterBy](user.dob.age));
    }
}