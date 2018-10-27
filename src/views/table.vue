<template>
    <div class="row">
        <div v-if="active ? index < (dich_vu.length - lengthMoRong()) : index < (dich_vu.length)"
            v-for="(item, index) in dich_vu" :key="index">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="block_camdo">
                    <div class="phan_loai">{{ item.name }} <template v-if="item.subName != null"><br>{{ item.subName }}</template></div>
                    <table>
                        <thead>
                            <tr>
                                <th :class="item.class" v-for="(item, i) in item.thuocTinh" :key="i">{{ item.key }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td v-for="item in item.thuocTinh" :key="item.key">
                                    <input v-model="item.value" min="0" type="number" class="form-control">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- /* =============== > Mở rộng < =============== */ -->
        <center style="margin: 12px auto 0">
            <button class="btn btn-primary" type="button" @click="xlActive()">
                {{ active === true ? 'Mở Rộng' : 'Đóng' }}
            </button>
        </center>
    </div>
</template>
<script>
    export default {
        watch: {
            'dich_vu': {
                handler(val) {
                    return this.saveState( `dich_vu`, val);
                },
                deep: true,
            },
        }, // watch
        created(){
            if(localStorage.getItem('dich_vu')){
                let value = JSON.parse(localStorage.getItem('dich_vu'));
                this.dich_vu = value;
            }
        },//created
        name: 'table',
        data(){
            return {
                active: true,
                moRong: 0,
                dich_vu:[
                    {
                        name: '15k',
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
                        ]
                    },
                    {name: '17k',
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
                        ]},
                    {name: '15k', subName: '17k',
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
                        ]},
                    {name: '23k',
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
                        ]},
                    {name: 'SJC', moRong: true,
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
                        ]},
                    {
                        name: '9999',
                        moRong: true,
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
                        ]},
                    {name: 'BK', moRong: true,
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
                        ]},
                ],
            }
        },//data
        methods:{
            xlActive(){
                return this.active = !this.active
            },
            lengthMoRong(){
                let i = 0;
                this.dich_vu.forEach((key) => {
                    if(key.moRong)
                        i++;
                });
                return i;
            },
            saveState : (items, state) => {
                    try {
                        const state_items = JSON.stringify(state);
                        localStorage.setItem(items, state_items);
                        console.log(state);
                        console.log(items);
                    } catch (err) { console.error(`Something went wrong: `) }
                }
        },//methods
    }
</script>
<style type="text/css">
tbody > tr > td > input, thead > tr{
    text-align: center;
}
.loai{
    background-color: #d2d2d2;
}
.luong{
    background-color: #e2e2e2;
}

.block_camdo{
    position: relative;
    margin-top: 25px;
}

.phan_loai{
    background: linear-gradient(to left, #a0a093 , #e2e2e2);
    border-radius: 12px;
    position: absolute;
    top: 0;
    left: 0;
    padding: 16px;
    font-weight: bold;
}

.block_camdo > table{
    margin-left: 69px;
}
</style>