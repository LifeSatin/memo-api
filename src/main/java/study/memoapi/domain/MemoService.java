package study.memoapi.domain;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class MemoService {

    private final MemoRepository memoRepository;

    @Transactional(readOnly = true)
    public Page<MemoDto> findAllByDto(Pageable pageable) {
        return memoRepository.findAll(pageable).map(MemoDto::new);
    }

    @Transactional
    public MemoDto saveMemo(MemoDto memoDto) {
        return new MemoDto(memoRepository.save(new Memo(memoDto)));
    }

    @Transactional(readOnly = true)
    public Memo findDtoById(Long id) {
        return memoRepository.findById(id).orElse(null);
    }

    //메모 수정
    @Transactional
    public MemoDto updateMemo(Long id, MemoDto memoDto) {
        Memo memo = memoRepository.findById(id).orElse(null);
        memo.update(memoDto);
        memoRepository.flush();
        return new MemoDto(memo);
    }

    //메모 삭제
    @Transactional
    public String deleteMemoById(Long id) {
        memoRepository.deleteById(id);
        return "deleted";
    }
}
