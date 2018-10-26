<template>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="block_camdo">
            <div class="phan_loai">{{ name }} <template v-if="subName != null"><br>{{ subName }}</template></div>
            <table>
                <thead>
                    <tr>
                        <th :class="item.class" v-for="(item, i) in thuocTinh" :key="i">{{ item.key }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td v-for="item in thuocTinh" :key="item.key">
                            <input v-model="item.value" min="0" type="number" class="form-control">
                        </td>
                    </tr>
                    <tr>
                        <td v-for="item in thuocTinh" :key="item.key">
                            <div v-if="item.value > 0">{{ item.value }}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>

    //const loadState = (items) => {
    //    try {
    //        var state_items = localStorage.getItem(items);
    //        if (state_items === null || state_items == '[]') { return undefined }
    //        return JSON.parse(state_items);
    //    } catch (err) { return undefined }
    //};

    const saveState = (items, state) => {
        try {
            const state_items = JSON.stringify(state);
            localStorage.setItem(items, state_items);
        } catch (err) { console.error(`Something went wrong: `) }
    }
    // ---------------------------------------------------------------
    export default{
        watch: {
            'thuocTinh': {
                handler(val, oldVal) {
                    saveState( `thuocTinh${this.thuocTinh_id}`, val);
                    console.log(val);
                    this.changeLocalStorage();
                },
                deep: true,
            },
        }, // watch
        props:[
            'name', 'subName', 'thuocTinh_id'
        ],
        data(){
            return {
                thuocTinh: [
                    { key: 'Nhẫn',  value: 0, class: 'loai' },
                    { key: 'Kiềng', value: 0, class: 'loai' },
                    { key: 'Mặt',   value: 0, class: 'loai' },
                    { key: 'Bông',  value: 0, class: 'loai' },
                    { key: 'Vòng',  value: 0, class: 'loai' },
                    { key: 'Dây',   value: 0, class: 'loai' },
                    { key: 'Lắc',   value: 0, class: 'loai' },
                    { key: 'Lượng', value: 0, class: 'luong' },
                    { key: 'Chỉ',    value: 0, class: 'luong' },
                    { key: 'Phân',  value: 0, class: 'luong' },
                    { key: 'Li',    value: 0, class: 'luong' },
                ],
            }
        },//data
        computed: {
        },//computed
        methods:{
            changeLocalStorage(){
                let thuocTinh = [];
                if(localStorage.getItem(this.thuocTinh_id))
                {
                    alert('msg');
                    let value = JSON.parse(localStorage.getItem(this.thuocTinh_id));
                    thuocTinh.push(value);
                    localStorage.setItem('thuocTinh', JSON.stringify(thuocTinh));
                    const interval = setInterval(() => {
                        clearInterval(interval);
                        localStorage.removeItem(this.thuocTinh_id);
                    }, 100);
                }
            }
        },//methods
    }
</script>