<template>
    <div></div>
</template>

<script>
import { onMounted } from "vue";
import tippy, { animateFill, followCursor, hideAll } from "tippy.js";
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';

export default {
    props: {
        includes: {
            type: String, 
            default: '/garden/seeds/'
        },
    },
    setup(props) {
        const isSeedLink = (element) => {
            return element.nodeName == 'A' && element.href.includes(props.includes)
        }

        const addWebMentions = () => {
            const links = document.querySelectorAll('a');
            links.forEach(link => link.relList.add("webmention"));
        }

        const addListeners = () => {
            const links = document.querySelector('section');
            links.addEventListener('mouseover', async (event) => {
                if (isSeedLink(event.target)) {
                    let tip; 
                    tip = tippy(event.target, {
                        theme: 'light',
                        content: 'Loading...',
                        allowHTML: true,
                        inertia: true,
                        plugins: [animateFill, followCursor],
                        placement: 'auto-end',
                        showOnCreate: true,
                        maxWidth: 740,
                        onShow: async (instance) => {
                            hideAll();
                            const data = await fetch(event.target.href)
                            .then(data => data.status == 200 ? data.text() : data.statusText)
                            .then(data => data)
                            instance.setContent(data);
                            
                        },
                        onHidden: () => {
                            tip.destroy();
                        }
                    });
                }
            })
        }

        onMounted(() => {
            addListeners();
            addWebMentions();
        })
    }
}
</script>

<style>
.tippy-box[data-inertia][data-state='visible'] {
  transition-timing-function: cubic-bezier(...);
}
</style>