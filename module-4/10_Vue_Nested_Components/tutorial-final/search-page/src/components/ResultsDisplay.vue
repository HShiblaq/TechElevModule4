<template>
<!-- only displayed if event is truthy as long as result has value -->
<!-- if true we create table wth headers and a v-for through results -->
    <table v-if="results">
        <tr>
            <th>ID</th>
            <th>Make Name</th>
            <th>Manufacturer's Name</th>
        </tr>
        <!-- look at API and see what it returns from the loop -->
        <tr v-for="result in results.Results">
            <td>{{ result.Make_ID }}</td>
            <td>{{ result.Make_Name }}</td>
            <td>{{ result.Mfr_Name }}</td>
        </tr>
    </table>
</template>

<script>
/**
 * Results display
 */
// if object is null we don't display table otherwise we do
export default {
    name: 'results-display',
    props: {
        results: Object
    }
}
</script>