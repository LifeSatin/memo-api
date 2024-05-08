package study.memoapi.domain;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class MemoController {

    private final MemoService memoService;

    @GetMapping("/")
    public Page<MemoDto> findAllMemo(Pageable pageable) {
        return memoService.findAllByDto(pageable);
    }

    @PostMapping("/")
    public MemoDto createNewMemo(@RequestBody MemoDto memoDto) {
        return memoService.saveMemo(memoDto);
    }

    @GetMapping("/{memoId}")
    public MemoDto viewMemo(@PathVariable("memoId") Long memoId) {
        return new MemoDto(memoService.findDtoById(memoId));
    }

    //얘만 안됨
    @PatchMapping("/{memoId}")
    public MemoDto updateMemo(@PathVariable("memoId") Long memoId, @RequestBody MemoDto memoDto) {
        MemoDto updatedMemo = memoService.updateMemo(memoId, memoDto);
        return updatedMemo;
    }

    @DeleteMapping("/{memoId}")
    public String deleteMemo(@PathVariable("memoId") Long memoId) {
        return memoService.deleteMemoById(memoId);
    }
}
